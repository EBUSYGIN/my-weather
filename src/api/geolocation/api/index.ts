import { GEOLOCATION_API_URL } from '@/assets/config/api';

export const geolocationApi = {
  getCityByCoords: ({ latitude, longitude }: GeolocationCoordinates) =>
    `${GEOLOCATION_API_URL}?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`,
};
