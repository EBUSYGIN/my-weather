import { GEOLOCATION_API_URL } from '@/assets/config/api';
import { ICoordinatesForApi } from '../types';

export const geolocationApi = {
  getCityByCoords: ({ latitude, longitude }: ICoordinatesForApi) =>
    `${GEOLOCATION_API_URL}/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`,
};
