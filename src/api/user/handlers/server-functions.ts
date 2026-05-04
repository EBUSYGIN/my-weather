'use server';
import { redirect } from 'next/navigation';
import { serverUserApi } from '../endpoints';
import { IUserResponse, LoginFormType, RegisterFormType } from '../types';
import { cookieManager } from '@/assets/lib/cookies/cookieStorage';
import { fetchApi } from '@/assets/lib/fetch/fetch';

const requestTimeoutMs = 25_000;

export const loginUser = async (userData: LoginFormType) => {
  try {
    const response = await fetchApi({
      url: serverUserApi.login(),
      method: 'POST',
      body: userData,
      options: { signal: AbortSignal.timeout(requestTimeoutMs) },
    });
    if (!response.ok) {
      throw new Error('Ошибка при входе');
    }
    const data: IUserResponse = await response.json();

    await cookieManager.setCookie('accessToken', data.accessToken, {
      maxAge: 60 * 15,
    });
    await cookieManager.setCookie('refreshToken', data.refreshToken);
  } catch (e) {
    if (e instanceof Error && e.name === 'TimeoutError') {
      throw new Error('Сервер не ответил вовремя. Попробуйте ещё раз.');
    }
    if (e instanceof Error) throw e;
    throw new Error('Ошибка при входе');
  }
  redirect('/');
};

export const registerUser = async (userData: RegisterFormType) => {
  try {
    const response = await fetchApi({
      url: serverUserApi.register(),
      method: 'POST',
      body: userData,
      options: { signal: AbortSignal.timeout(requestTimeoutMs) },
    });
    if (!response.ok) {
      throw new Error('Ошибка при регистрации');
    }
    const data: IUserResponse = await response.json();

    await cookieManager.setCookie('accessToken', data.accessToken, {
      maxAge: 60 * 15,
    });
    await cookieManager.setCookie('refreshToken', data.refreshToken);
  } catch (e) {
    if (e instanceof Error && e.name === 'TimeoutError') {
      throw new Error('Сервер не ответил вовремя. Попробуйте ещё раз.');
    }
    if (e instanceof Error) throw e;
    throw new Error('Ошибка при регистрации');
  }
  redirect('/');
};
