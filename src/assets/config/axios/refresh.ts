import axios from 'axios';

export const refreshTokens = async () => {
  await axios.get('/api/user/refresh', {
    withCredentials: true,
  });
};
