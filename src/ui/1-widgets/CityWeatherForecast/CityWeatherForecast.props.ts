import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

export interface CityWeatherForecastProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  city: string;
}
