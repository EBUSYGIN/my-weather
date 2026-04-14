'use client';
import {
  useState,
  useEffect,
  useCallback,
  useOptimistic,
  startTransition,
} from 'react';
import cn from 'classnames';

import { Button } from '@/ui/4-shared';
import { userHandlers } from '@/api/user/handlers';
import { IUserInfoResponse } from '@/api/user/types';

import { optimisticReducer } from './optimistic-reducer';
import { IToggleFavCityProps } from './ToggleFavCity.props';
import styles from './ToggleFavCity.module.css';

export function ToggleFavCity({
  children,
  className,
  cityName,
}: IToggleFavCityProps) {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [cities, setCities] = useState<string[]>([]);
  const [optimisticCityArray, setOptimisticCityArray] = useOptimistic<
    string[],
    string
  >(cities, optimisticReducer);

  useEffect(() => {
    userHandlers
      .getUserInfo()
      .then((response: IUserInfoResponse) => {
        const cities = response.userInfo.favoriteCities.map(
          (city) => city.cityName,
        );
        setIsAuthorized(true);
        setCities(cities);
      })
      .catch(console.log);
  }, []);

  const onToggle = useCallback(async (city: string) => {
    startTransition(async () => {
      setOptimisticCityArray(cityName);
      const cities = (
        await userHandlers.togglerFavCity(cityName)
      ).favoriteCities.map((city) => city.cityName);
      console.log(cities);
      setCities(cities);
    });
  }, []);

  if (!isAuthorized) {
    return null;
  }

  return (
    <Button
      buttonType='toggler'
      appearance='ghost'
      className={cn(styles.toggler, className, {
        [styles.active]: optimisticCityArray.some((city) => city === cityName),
      })}
      onClick={() => onToggle(cityName)}
    >
      {children}
    </Button>
  );
}
