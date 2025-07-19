import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CityWeatherProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  city: string;
}
