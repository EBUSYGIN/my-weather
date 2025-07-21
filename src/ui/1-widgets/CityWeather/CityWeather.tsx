import Image from 'next/image';

import { weatherCodeToImage } from '@/assets/config/weatherImage.config';

import { CityHandler } from '@/api/city/handler';

import { Title } from '@/ui/4-shared';

import { CityWeatherProps } from './CityWeather.props';
import styles from './CityWeather.module.css';
import { dateFormatOptions } from '@/assets/config/dateFormatter.config';

export async function CityWeather({ city }: CityWeatherProps) {
  const response = await CityHandler.getWeather(city);

  if (!response.isSuccess) return null;

  return (
    <div className={styles.cityWeather}>
      <div className={styles.head}>
        <Title tag='h1' size='xl'>
          {response.data.location.name}
        </Title>
        <span className={styles.coords}>
          {response.data.location.lat} , {response.data.location.lon}
        </span>
      </div>
      <div className={styles.date}>
        {new Intl.DateTimeFormat('ru-RU', dateFormatOptions).format(
          new Date(response.data.location.localtime)
        )}
      </div>

      <div className={styles.weatherData}>
        <div className={styles.tempWrapper}>
          <div className={styles.temp}>{response.data.current.temp_c}</div>
          <div className={styles.meta}>
            <Title tag='h2' size='l'>
              {response.data.current.condition.text}
            </Title>
            <span className={styles.country}>
              {response.data.location.country}
            </span>
          </div>
        </div>
        <Image
          width={200}
          height={200}
          src={
            response.data.current.condition.code
              ? weatherCodeToImage[response.data.current.condition.code]
              : '/logo.png'
          }
          alt='Изображение погоды'
        />
      </div>
    </div>
  );
}
