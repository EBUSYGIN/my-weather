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
      const data = await response.json();

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
      if (!response.ok || (data && data.error)) {
        return {
          isSuccess: false,
          statusCode: response.status,
          status: ResponseStatus.Failed,
          errorMessage: data?.error?.message ?? 'Request failed',
        };
      }

      return {
        isSuccess: true,
        statusCode: response.status,
        status: ResponseStatus.Success,
        data: data as ICurrentWeatherResponse,
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
      const data = await response.json();

      if (!response.ok || (data && data.error)) {
        return {
          isSuccess: false,
          statusCode: response.status,
          status: ResponseStatus.Failed,
          errorMessage: data?.error?.message ?? 'Request failed',
        };
      }

      return {
        isSuccess: true,
        statusCode: response.status,
        status: ResponseStatus.Success,
        data: data as IWeatherForecastResponse,
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
