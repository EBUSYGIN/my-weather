const getUserGeolocation = (): Promise<GeolocationCoordinates> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(new Error('Геолокация недоступна'));
    }

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => resolve(position.coords),
      () => reject(new Error('Геопозиция недоступна')),
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  });
};

export const geolocationService = {
  getUserGeolocation,
};
