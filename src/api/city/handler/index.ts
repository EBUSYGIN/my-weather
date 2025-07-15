import { CityApi } from '../endpoints';

export class CityHandler {
  static async getWeather(city: string) {
    try {
      const response = await fetch(CityApi.getWeatherInCity(city));
      const data = await response.json();

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
