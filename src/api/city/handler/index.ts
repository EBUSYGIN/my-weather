import {
  IFailedResponse,
  ISuccessResponse,
  ResponseStatus,
} from '@/services/types/utilTypes';
import { CityApi } from '../endpoints';
import { ICurrentWeatherResponse } from '../types';

export class CityHandler {
  static async getWeather(
    city: string
  ): Promise<ISuccessResponse<ICurrentWeatherResponse> | IFailedResponse> {
    try {
      const response = await fetch(CityApi.getWeatherInCity(city));
      const data: ICurrentWeatherResponse = await response.json();
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
