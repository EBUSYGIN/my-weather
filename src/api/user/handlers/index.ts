import axiosInstance from '@/assets/config/axios/axios-instance';
import { userApi } from '../endpoints';
import { IUserResponse } from '../types';

const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get<IUserResponse>(
      userApi.nextGetInfo(),
    );
    console.log(response);
    const data = response.data;
    console.log(data);
    return data;
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error('Ошибка запроса данных');
  }
};

export const userHandlers = {
  getUserInfo,
};
