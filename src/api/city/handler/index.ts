import {
  IFailedResponse,
  ISuccessResponse,
  ResponseStatus,
} from '@/services/types/utilTypes';
import { CityApi } from '../endpoints';
import {
  ICitySearch,
  ICurrentWeatherResponse,
  IWeatherForecastResponse,
} from '../types';

export class CityHandler {
  static async getWeather(
    city: string
  ): Promise<ISuccessResponse<ICurrentWeatherResponse> | IFailedResponse> {
    try {
      const response = await fetch(CityApi.getWeatherInCity(city));
      const data: ICurrentWeatherResponse = await response.json();

      // return new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve({
      //       isSuccess: true,
      //       statusCode: 200,
      //       status: ResponseStatus.Success,
      //       data: data,
      //     });
      //   }, 3000);
      // });
      return {
        isSuccess: true,
        statusCode: 200,
        status: ResponseStatus.Success,
        data: data,
      };
    } catch (e) {
      return {
        isSuccess: false,
        statusCode: e instanceof Error ? 500 : 500,
        status: ResponseStatus.Failed,
        errorMessage: e instanceof Error ? e.message : 'Unknown error occurred',
      };
    }
  }

  static async getForecast(
    city: string,
    numberOfDays: number,
    tp: number
  ): Promise<ISuccessResponse<IWeatherForecastResponse> | IFailedResponse> {
    try {
      const response = await fetch(
        CityApi.getCityWeatherForecast(city, numberOfDays, tp)
      );
      const data: IWeatherForecastResponse = await response.json();

      return {
        isSuccess: true,
        statusCode: 200,
        status: ResponseStatus.Success,
        data: data,
      };
    } catch (e) {
      return {
        isSuccess: false,
        statusCode: e instanceof Error ? 500 : 500,
        status: ResponseStatus.Failed,
        errorMessage: e instanceof Error ? e.message : 'Unknown error occurred',
      };
    }
  }

  static async searchForCity(
    query: string
  ): Promise<IFailedResponse | ISuccessResponse<ICitySearch[]>> {
    try {
      const response = await fetch(CityApi.searchCity(query));
      const data: ICitySearch[] = await response.json();

      return {
        isSuccess: true,
        statusCode: 200,
        status: ResponseStatus.Success,
        data: data,
      };
    } catch (e) {
      return {
        isSuccess: false,
        statusCode: e instanceof Error ? 500 : 500,
        status: ResponseStatus.Failed,
        errorMessage: e instanceof Error ? e.message : 'Unknown error occurred',
      };
    }
  }
}
