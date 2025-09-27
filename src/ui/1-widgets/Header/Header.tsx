import Link from 'next/link';

import { dateFormatOptions } from '@/assets/config/dateFormatter.config';

import { Icon } from '@/ui/4-shared';
import { CitySearch, GeoWeatherButton, ThemeToggler } from '@/ui/2-features';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Icon.Logo />
      </Link>
      <CitySearch />
      <GeoWeatherButton />
      <div className={styles.date}>
        {new Intl.DateTimeFormat('ru-RU', dateFormatOptions).format(new Date())}
      </div>
      <ThemeToggler />
      <p className={styles.tuneText}>
        Будущее кажется светлым — оставайтесь на позитиве!
      </p>
    </header>
  );
}
