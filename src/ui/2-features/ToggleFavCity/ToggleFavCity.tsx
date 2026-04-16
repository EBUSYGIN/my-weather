'use client';
import { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import { Button } from '@/ui/4-shared';
import { userHandlers } from '@/api/user/handlers';
import { IUserInfoResponse } from '@/api/user/types';

import { IToggleFavCityProps } from './ToggleFavCity.props';
import styles from './ToggleFavCity.module.css';

export function ToggleFavCity({
  children,
  className,
  cityName,
}: IToggleFavCityProps) {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [userCities, setUserCities] = useState<string[]>([]);

  useEffect(() => {
    userHandlers
      .getUserInfo()
      .then((response: IUserInfoResponse) => {
        const cities = response.userInfo.favoriteCities.map(
          (city) => city.cityName,
        );
        setIsAuthorized(true);
        setUserCities(cities);
      })
      .catch(console.log);
  }, []);

  const onToggle = useCallback(async (city: string) => {
    userHandlers
      .togglerFavCity(city)
      .then((res) => {
        const cities = res.favoriteCities.map((city) => city.cityName);
        setUserCities(cities);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!isAuthorized) {
    return null;
  }

  return (
    <Button
      buttonType='toggler'
      appearance='ghost'
      className={cn(styles.toggler, className, {
        [styles.active]: userCities.includes(cityName),
      })}
      onClick={() => onToggle(cityName)}
    >
      {children}
    </Button>
  );
}
