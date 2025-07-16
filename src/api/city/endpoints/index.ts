import { API_URL } from '@/assets/config/api';

export class CityApi {
  static getWeatherInCity(city: string): string {
    return `${API_URL}&q=${city}`;
  }
}
