'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { fetchApi } from '@/assets/config/fetch';
import { userApi } from '../endpoints';
import {
  ILoginResponse,
  IUserResponse,
  LoginFormType,
  RegisterFormType,
} from '../types';

export const loginUser = async (userData: LoginFormType) => {
  try {
    const data: ILoginResponse = await fetchApi(
      userApi.login(),
      'POST',
      userData,
    );
    const { accessToken, refreshToken } = data;
    const cookieStore = await cookies();
    cookieStore.set('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 15,
    });
    cookieStore.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
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
    const cookieStore = await cookies();
    cookieStore.set('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 15,
    });
    cookieStore.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error('Ошибка при регистрации');
  }
  redirect('/');
};
