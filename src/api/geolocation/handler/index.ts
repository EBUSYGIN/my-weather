import { geolocationApi } from '../api';

const getCityByCoords = async ({
  longitude,
  latitude,
}: {
  longitude: string;
  latitude: string;
}): Promise<string> => {
  try {
    const serverResponse = await fetch(
      geolocationApi.getCityByCoords(latitude, longitude),
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Token ${process.env.GEOLOCATION_KEY}`,
        },
        body: JSON.stringify({
          lat: latitude,
          lon: longitude,
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
