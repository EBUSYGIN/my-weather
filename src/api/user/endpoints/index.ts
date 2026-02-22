import { NODE_API } from '@/assets/config/api';

export const userApi = {
  login: () => `${NODE_API}/users/login`,
  register: () => `${NODE_API}/users/register`,
  updateTokens: () => `${NODE_API}/users/refresh`,
};
