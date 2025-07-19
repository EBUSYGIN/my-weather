import Link from 'next/link';

import { Icon } from '../Icon/Icon';

import styles from './NavToHome.module.css';

export function NavToHome() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'} className={styles.link}>
        <Icon.BackArrow />
        <span>Назад</span>
      </Link>
    </nav>
  );
}
