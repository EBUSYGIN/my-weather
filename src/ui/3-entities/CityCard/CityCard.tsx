import Image from 'next/image';

import { CityCardProps } from './CityCardProps';
import { CityHandler } from '@/api/city/handler';

import { Card, Title } from '@/ui/4-shared';

import styles from './CityCard.module.css';

export async function CityCard({ city }: CityCardProps) {
  const response = await CityHandler.getWeather(city);
  console.log(response);

  if (response.isSuccess) {
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
      <Title tag='h3' size='s'>
        {response.data.location.name}
      </Title>
      <Image src={'/sunny.png'} alt={'Солнечно'} width={150} height={150} />
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
