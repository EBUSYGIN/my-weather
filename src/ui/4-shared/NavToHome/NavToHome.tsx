'use client';
import { useRouter } from 'next/navigation';
import { Icon } from '../Icon/Icon';

import styles from './NavToHome.module.css';

export function NavToHome() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <button className={styles.link} onClick={() => router.back()}>
        <Icon.BackArrow />
        <span>Назад</span>
      </button>
    </nav>
  );
}
