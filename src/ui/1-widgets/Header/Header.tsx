'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { userHandlers } from '@/api/user/handlers';
import { dateFormatOptions } from '@/assets/config/dateFormatter.config';

import { Icon } from '@/ui/4-shared';
import { CitySearch, GeoWeatherButton, ThemeToggler } from '@/ui/2-features';

import styles from './Header.module.css';
import { IUser, IUserInfoResponse } from '@/api/user/types';

export function Header() {
  const [userInfo, setUserInfo] = useState<IUserInfoResponse | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await userHandlers.getUserInfo();
        setUserInfo(data);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <Link href={'/'}>
          <Icon.Logo />
        </Link>
        <CitySearch />
        <div className={styles.date}>
          {new Intl.DateTimeFormat('ru-RU', dateFormatOptions).format(
            new Date(),
          )}
        </div>
        <ThemeToggler />
        <p className={styles.tuneText}>
          Будущее кажется светлым — оставайтесь на позитиве!
        </p>
      </div>
      <div className={styles.actionsContainer}>
        <div className={styles.actions}>
          <GeoWeatherButton />
          {userInfo ? (
            <Link href='/profile' className={styles.loginLink}>
              Профиль
            </Link>
          ) : (
            <Link href='/login' className={styles.loginLink}>
              Вход в аккаунт
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
