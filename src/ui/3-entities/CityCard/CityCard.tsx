import Image from 'next/image';

import { CityCardProps } from './CityCardProps';
import { CityHandler } from '@/api/city/handler';

import { Card, Title } from '@/ui/4-shared';

import styles from './CityCard.module.css';

export async function CityCard({ city }: CityCardProps) {
  const data = await CityHandler.getWeather(city);
  console.log(data);

  return (
    <Card className={styles.card}>
      <Title tag='h3' size='s'>
        {data.location.name}
      </Title>
      <Image src={'/sunny.png'} alt={'Солнечно'} width={150} height={150} />
      <div className={styles.temps}>
        <span className={styles.tempC}>{data.current.temp_c}</span>
        <span className={styles.tempF}>{data.current.temp_f}</span>
      </div>
      <div className={styles.condition}>{data.current.condition.text}</div>
    </Card>
  );
}
