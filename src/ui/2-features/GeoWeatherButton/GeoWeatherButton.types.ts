export interface IGeoWeatherButtonState {
  geolocation: GeolocationCoordinates | null;
  error: boolean;
  city: null | string;
  isLoading: boolean;
}
