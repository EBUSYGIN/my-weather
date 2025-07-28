import { API_URL } from '@/assets/config/api';

export class CityApi {
  static getWeatherInCity = (city: string): string =>
    `${API_URL}/current.json?&q=${city}&lang=ru&key=${process.env.WEATHER_API_KEY}`;

  static getCityWeatherForecast = (
    city: string,
    numberOfDays: number,
    tp: number
  ): string =>
    `${API_URL}/forecast.json?&q=${city}&days=${numberOfDays}&tp=${tp}&lang=ru&key=${process.env.WEATHER_API_KEY}`;

  static searchCity = (query: string): string =>
    `${API_URL}/search.json?q=${query}&lang=ru&key=${process.env.WEATHER_API_KEY}`;
}
