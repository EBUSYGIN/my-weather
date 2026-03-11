'use server';
import { redirect } from 'next/navigation';
import { userApi } from '../endpoints';
import { IUserResponse, LoginFormType, RegisterFormType } from '../types';
import { cookieManager } from '@/assets/config/cookieStorage';
import { fetchApi } from '@/assets/config/fetch';

export const loginUser = async (userData: LoginFormType) => {
  try {
    const response = await fetchApi(userApi.login(), 'POST', userData);
    if (!response.ok) {
      throw new Error('Ошибка при входе');
    }
    const data: IUserResponse = await response.json();

    await cookieManager.setCookie('accessToken', data.accessToken, {
      maxAge: 60 * 15,
    });
    await cookieManager.setCookie('refreshToken', data.refreshToken);
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error('Ошибка при входе');
  }
  redirect('/');
};

export const registerUser = async (userData: RegisterFormType) => {
  try {
    const response = await fetchApi(userApi.register(), 'POST', userData);
    if (!response.ok) {
      throw new Error('Ошибка при регистрации');
    }
    const data: IUserResponse = await response.json();

    await cookieManager.setCookie('accessToken', data.accessToken, {
      maxAge: 60 * 15,
    });
    await cookieManager.setCookie('refreshToken', data.refreshToken);
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error('Ошибка при регистрации');
  }
  redirect('/');
};
