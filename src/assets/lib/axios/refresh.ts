import { clientUserApi } from '@/api/user/endpoints';
import axios from 'axios';

export const refreshTokens = async () => {
  await axios.get(clientUserApi.refreshTokens(), {
    withCredentials: true,
  });
};
