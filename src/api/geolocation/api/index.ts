import { GEOLOCATION_API_URL } from '@/assets/config/api';

export const geolocationApi = {
  getCityByCoords: () => `${GEOLOCATION_API_URL}?&localityLanguage=ru`,
};
