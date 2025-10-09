import { GEOLOCATION_KEY } from '@/assets/config/api';
import { geolocationApi } from '../api';

const getCityByCoords = async ({
  longitude,
  latitude,
}: {
  longitude: string;
  latitude: string;
}): Promise<string> => {
  try {
    const serverResponse = await fetch(geolocationApi.getCityByCoords(), {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        Authorization: `Token ${GEOLOCATION_KEY}`,
      },
      body: JSON.stringify({
        lat: latitude,
        lon: longitude,
      }),
    });
    console.log(serverResponse);
    const data = await serverResponse.json();

    return data.suggestions[0].data.city;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : 'Непредвиденная ошибка');
  }
};

export const geolocationHandler = {
  getCityByCoords,
};
