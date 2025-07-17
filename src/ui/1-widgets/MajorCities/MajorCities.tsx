import { Suspense } from 'react';

import { cities } from '@/assets/config/majorCitiesConf';

import { CityCard, CityCardSkeleton } from '@/ui/3-entities/City';
import { Title } from '@/ui/4-shared';

import styles from './MajorCities.module.css';

export function MajorCities() {
  return (
    <>
      <Title tag='h1' size='m'>
        Крупные города
      </Title>
      <div className={styles.list}>
        {cities.map((city, index) => (
          <Suspense key={index} fallback={<CityCardSkeleton />}>
            <CityCard city={city} />
          </Suspense>
        ))}
      </div>
    </>
  );
}
