'use server';

import { fetchApi } from '@/assets/config/fetch';
import { userApi } from '../endpoints';
import { LoginFormType } from '../types';

export const login = async (userData: LoginFormType) => {
  try {
    const data = await fetchApi(userApi.login(), 'POST', userData);

    return data;
  } catch (e) {
    return e;
  }
};
