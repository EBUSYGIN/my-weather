import axiosInstance from '@/assets/lib/axios/axios-instance';
import { clientUserApi } from '../endpoints';
import { IUserInfoResponse } from '../types';

const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get<IUserInfoResponse>(
      clientUserApi.getInfo(),
    );
    const data = response.data;
    return data;
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error('Ошибка запроса данных');
  }
};

export const userHandlers = {
  getUserInfo,
};
