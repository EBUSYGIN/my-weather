import { GEOLOCATION_API_URL } from '@/assets/config/api';

export const geolocationApi = {
  getCityByCoords: (latitude: string, longitude: string) =>
    `${GEOLOCATION_API_URL}?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`,
};
