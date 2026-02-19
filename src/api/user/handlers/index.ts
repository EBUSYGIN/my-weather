'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { fetchApi } from '@/assets/config/fetch';
import { userApi } from '../endpoints';
import { ILoginResponse, LoginFormType } from '../types';

export const login = async (userData: LoginFormType) => {
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
    if (e instanceof Error) return new Error(e.message);
  }
  redirect('/');
};
