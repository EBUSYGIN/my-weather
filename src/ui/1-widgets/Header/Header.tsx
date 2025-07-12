import { Icon, Input } from '@/ui/4-shared';

import styles from './Header.module.css';

export function Header() {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  };

  return (
    <header className={styles.header}>
      <Icon.Logo />
      <Input
        icon='Magnifier'
        placeholder='Введите город...'
        className={styles.search}
      />
      <div className={styles.date}>
        {new Intl.DateTimeFormat('ru-RU', dateFormatOptions).format(new Date())}
      </div>
      <p className={styles.tuneText}>
        Будущее кажется светлым — оставайтесь с нами!
      </p>
    </header>
  );
}
