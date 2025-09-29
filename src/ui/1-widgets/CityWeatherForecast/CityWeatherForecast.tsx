import { CityHandler } from '@/api/city/handler';
import { CityWeatherForecastCard } from '@/ui/3-entities/City';

import { CityWeatherForecastProps } from './CityWeatherForecast.props';
import styles from './CityWeatherForecast.module.css';

export async function CityWeatherForecast({ city }: CityWeatherForecastProps) {
  const response = await CityHandler.getForecast(city, 6, 24);

  if (!response.isSuccess || !response.data?.forecast?.forecastday?.length) return null;

  // console.log(response)

  // console.log(response.data.forecast.forecastday);

  return (
    <li className={styles.list}>
      {response.data.forecast.forecastday.map((forescast) => (
        <CityWeatherForecastCard
          forecast={forescast}
          key={forescast.date_epoch}
        />
      ))}
    </li>
  );
}
