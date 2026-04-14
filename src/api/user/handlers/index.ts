import axiosInstance from '@/assets/lib/axios/axios-instance';
import { clientUserApi } from '../endpoints';
import { IUser, IUserInfoResponse } from '../types';

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

const togglerFavCity = async (city: string) => {
  try {
    const response = await axiosInstance.post<IUser>(
      clientUserApi.togglerFavCity(),
      null,
      {
        params: { city: city },
      },
    );
    const user = response.data;
    return user;
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error('Ошибка обновления города');
  }
};

export const userHandlers = {
  getUserInfo,
  togglerFavCity,
};
