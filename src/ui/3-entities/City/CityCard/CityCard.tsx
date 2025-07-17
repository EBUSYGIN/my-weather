import Image from 'next/image';

import { CityHandler } from '@/api/city/handler';

import { weatherCodeToImage } from '@/assets/config/weatherImageConf';
import { Card, Title } from '@/ui/4-shared';

import { CityCardProps } from './CityCardProps';
import styles from './CityCard.module.css';

export async function CityCard({ city }: CityCardProps) {
  const response = await CityHandler.getWeather(city);

  if (!response.isSuccess) {
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
      <div className={styles.titleWrapper}>
        <Title tag='h3' size='s'>
          {response.data.location.name}
        </Title>
      </div>

      <Image
        src={
          response.data.current.condition.code
            ? weatherCodeToImage[response.data.current.condition.code]
            : '/logo.png'
        }
        alt={'Солнечно'}
        width={150}
        height={150}
      />
      <div className={styles.temps}>
        <span className={styles.tempC}>{response.data.current.temp_c}</span>
        <span className={styles.tempF}>{response.data.current.temp_f}</span>
      </div>
      <div className={styles.condition}>
        {response.data.current.condition.text}
      </div>
    </Card>
  );
}
