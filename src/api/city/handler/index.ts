import {
  IFailedResponse,
  ISuccessResponse,
  ResponseStatus,
} from '@/services/types/utilTypes';
import { CityApi } from '../endpoints';
import { ICurrentWeatherResponse, IWeatherForecastResponse } from '../types';

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
      const data: IFailedResponse = {
        isSuccess: false,
        statusCode: e instanceof Error ? 500 : 500,
        status: ResponseStatus.Failed,
        errorMessage: e instanceof Error ? e.message : 'Unknown error occurred',
      };

      return data;
    }
  }

  static async getForecast(
    city: string,
    numberOfDays: number,
    tp: number
  ): Promise<ISuccessResponse<IWeatherForecastResponse> | IFailedResponse> {
    try {
      console.log(CityApi.getCityWeatherForecast(city, numberOfDays, tp));
      const response = await fetch(
        CityApi.getCityWeatherForecast(city, numberOfDays, tp)
      );
      const data: IWeatherForecastResponse = await response.json();
      console.log(data);

      return {
        isSuccess: true,
        statusCode: 200,
        status: ResponseStatus.Success,
        data: data,
      };
    } catch (e) {
      const data: IFailedResponse = {
        isSuccess: false,
        statusCode: e instanceof Error ? 500 : 500,
        status: ResponseStatus.Failed,
        errorMessage: e instanceof Error ? e.message : 'Unknown error occurred',
      };

      return data;
    }
  }
}
