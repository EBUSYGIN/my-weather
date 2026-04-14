import { CityCardClient } from '@/ui/3-entities/City';
import { Title } from '@/ui/4-shared';

import { useAnyInfo } from '@/assets/hooks/useAnyInfo';
import { userHandlers } from '@/api/user/handlers';
import { IUserInfoResponse } from '@/api/user/types';

import styles from './FavoriteCitiesClient.module.css';

export function FavoriteCitiesClient() {
  const { data } = useAnyInfo<IUserInfoResponse>(
    'user',
    userHandlers.getUserInfo,
  );

  if (!data) return null;

  return (
    <>
      <Title tag='h1' size='m'>
        Ваши избранные города
      </Title>
      <ul className={styles.list}>
        {data.userInfo.favoriteCities.map((city, index) => (
          <li key={city.id}>
            <CityCardClient city={city.cityName} />
          </li>
        ))}
      </ul>
    </>
  );
}
