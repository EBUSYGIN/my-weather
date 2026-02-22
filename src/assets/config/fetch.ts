import { userApi } from '@/api/user/endpoints';
import { ITokenResponse } from '@/api/user/types';
import { cookieManager } from './cookieStorage';

type methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

let authPromise: Promise<void> | null = null;

export const fetchApi = async <T>(
  url: string,
  method: methods,
  body: unknown,
  options?: Partial<RequestInit>,
  isRetry?: boolean,
): Promise<T> => {
  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    ...options,
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  const response = await fetch(url, requestOptions);

  if (response.status === 403 && !isRetry) {
    try {
      if (!authPromise) {
        authPromise = handleTokenUpdate().finally(() => {
          authPromise = null;
        });
      }
      await authPromise;
      return fetchApi(url, method, body, options, true);
    } catch (e) {
      throw e;
    }
  }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Ошибка запроса');
  }

  return response.json();
};

const handleTokenUpdate = async () => {
  const response = await fetch(userApi.updateTokens(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Refresh failed');
  }

  const { accessToken, refreshToken }: ITokenResponse = await response.json();

  await cookieManager.setCookie('accessToken', accessToken, {
    maxAge: 60 * 15,
  });
  await cookieManager.setCookie('refreshToken', refreshToken);
};
