import { NODE_API } from '@/assets/config/api';

export const serverUserApi = {
  login: () => `${NODE_API}/users/login`,
  register: () => `${NODE_API}/users/register`,
  updateTokens: () => `${NODE_API}/users/refresh`,
  getInfo: () => `${NODE_API}/users/info`,
};

export const clientUserApi = {
  getInfo: () => `api/info`,
  refreshTokens: () => `api/refresh`,
};
