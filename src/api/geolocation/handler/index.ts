import { IFailedResponse, ResponseStatus } from '@/services/types/utilTypes';
import { geolocationApi } from '../api';

const getCityByCoords = async (
  coordsObject: GeolocationCoordinates
): Promise<string> => {
  try {
    const serverResponse = await fetch(
      geolocationApi.getCityByCoords(coordsObject),
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Token ${process.env.NEXT_PUBLIC_DOMAIN3}`,
        },
        body: JSON.stringify({
          lat: coordsObject.latitude,
          lon: coordsObject.longitude,
        }),
      }
    );
    const data = await serverResponse.json();
    return data.suggestions[0].data.city;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : 'Непредвиденная ошибка');
  }
};

export const geolocationHandler = {
  getCityByCoords,
};
