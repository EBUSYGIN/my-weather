import Image from 'next/image';

import { weatherCodeToImage } from '@/assets/config/weatherImage.config';
import { Card, Title } from '@/ui/4-shared';

import { CityWeatherForecastCardProps } from './CityWeatherForecastCard.props';
import styles from './CityWeatherForecastCard.module.css';
import { dateFormatOptions } from '@/assets/config/dateFormatter.config';

export function CityWeatherForecastCard({
  forecast,
}: CityWeatherForecastCardProps) {
  if (!forecast) {
    return (
      <Card className={styles.card}>
        <Title tag='h3' size='s'>
          Данные о погоде недоступны сейчас
        </Title>
      </Card>
    );
  }

  return (
    <Card className={styles.card}>
      <Title tag='h3' size='s' className={styles.date}>
        {new Intl.DateTimeFormat('ru-RU', dateFormatOptions).format(
          new Date(forecast.date)
        )}
      </Title>

      <Image
        src={
          forecast.day.condition.code
            ? weatherCodeToImage[forecast.day.condition.code]
            : '/logo.png'
        }
        alt={'Солнечно'}
        width={150}
        height={150}
      />
      <div className={styles.temps}>
        <span className={styles.tempC}>{forecast.day.avgtemp_c}</span>
        <span className={styles.tempF}>{forecast.day.avgtemp_f}</span>
      </div>
      <div className={styles.condition}>{forecast.day.condition.text}</div>
    </Card>
  );
}
