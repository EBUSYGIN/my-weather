export interface IGeoWeatherButtonState {
  geolocation: GeolocationCoordinates | null;
  error: boolean;
  city: string;
  isLoading: boolean;
}
