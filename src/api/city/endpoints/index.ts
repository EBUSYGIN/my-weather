import { API_URL } from '@/assets/config/api';

export class CityApi {
  static getWeatherInCity(city: string): string {
    return `${API_URL}/current.json?&q=${city}&lang=ru&key=${process.env.WEATHER_API_KEY}`;
  }

  static getCityWeatherForecast(
    city: string,
    numberOfDays: number,
    tp: number
  ): string {
    return `${API_URL}/forecast.json?&q=${city}&days=${numberOfDays}&tp=${tp}&lang=ru&key=${process.env.WEATHER_API_KEY}`;
  }
}
