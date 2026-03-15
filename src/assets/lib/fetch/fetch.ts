import { IFetchOptions } from './fetch.types';

export const fetchApi = async (options: IFetchOptions) => {
  const defaultOptions: RequestInit = {
    method: options.method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options.options,
  };

  if (options.token) {
    defaultOptions.headers = {
      ...defaultOptions.headers,
      Authorization: `Bearer ${options.token}`,
    };
  }

  if (options.body) {
    defaultOptions.body = JSON.stringify(options.body);
  }

  return fetch(options.url, defaultOptions);
};
