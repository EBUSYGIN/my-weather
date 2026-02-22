'use server';

import { redirect } from 'next/navigation';
import { fetchApi } from '@/assets/config/fetch';
import { userApi } from '../endpoints';
import {
  ITokenResponse,
  IUserResponse,
  LoginFormType,
  RegisterFormType,
} from '../types';
import { cookieManager } from '@/assets/config/cookieStorage';

export const loginUser = async (userData: LoginFormType) => {
  try {
    const data: ITokenResponse = await fetchApi(
      userApi.login(),
      'POST',
      userData,
    );
    const { accessToken, refreshToken } = data;
    await cookieManager.setCookie('accessToken', accessToken, {
      maxAge: 60 * 15,
    });
    await cookieManager.setCookie('refreshToken', refreshToken);
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error('Ошибка при входе');
  }
  redirect('/');
};

export const registerUser = async (userData: RegisterFormType) => {
  try {
    const data: IUserResponse = await fetchApi(
      userApi.register(),
      'POST',
      userData,
    );
    const { accessToken, refreshToken } = data;
    await cookieManager.setCookie('accessToken', accessToken, {
      maxAge: 60 * 15,
    });
    await cookieManager.setCookie('refreshToken', refreshToken);
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error('Ошибка при регистрации');
  }
  redirect('/');
};
