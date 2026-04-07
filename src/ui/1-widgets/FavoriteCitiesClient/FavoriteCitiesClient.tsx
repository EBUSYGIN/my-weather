import { Suspense } from 'react';

import { CityCardClient, CityCardSkeleton } from '@/ui/3-entities/City';
import { Title } from '@/ui/4-shared';

import styles from './FavoriteCitiesClient.module.css';
import { useAnyInfo } from '@/assets/hooks/useAnyInfo';
import { userHandlers } from '@/api/user/handlers';
import { IUserInfoResponse } from '@/api/user/types';

export function FavoriteCitiesClient() {
  const { data } = useAnyInfo<IUserInfoResponse>(
    'user',
    userHandlers.getUserInfo,
  );

  if (!data) return null;

  return (
    <>
      <Title tag='h1' size='m'>
        Избранные города
      </Title>
      <ul className={styles.list}>
        {data.userInfo.favoriteCities.map((city, index) => (
          <Suspense key={index} fallback={<CityCardSkeleton />}>
            <li>
              <CityCardClient city={city.cityName} />
            </li>
          </Suspense>
        ))}
      </ul>
    </>
  );
}
