import { IFailedResponse, ResponseStatus } from '@/services/types/utilTypes';
import { geolocationApi } from '../api';

const getCityByCoords = async (
  coordsObject: GeolocationCoordinates
): Promise<string> => {
  try {
    const serverResponse = await fetch(
      geolocationApi.getCityByCoords(coordsObject)
    );
    const data = await serverResponse.json();
    return data.city;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : 'Непредвиденная ошибка');
  }
};

export const geolocationHandler = {
  getCityByCoords,
};
