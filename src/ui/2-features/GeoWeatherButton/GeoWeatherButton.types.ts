export interface IGeoWeatherButtonState {
  geolocation: GeolocationCoordinates | null;
  error: 'error' | null;
  city: null | string;
  isLoading: boolean;
}
