import { Icon, Input } from '@/ui/4-shared';

import styles from './Header.module.css';
import { ThemeToggler } from '@/ui/2-features';

export function Header() {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  };

  return (
    <header className={styles.header}>
      <Icon.Logo />
      <div className={styles.search}>
        <Input icon='Magnifier' placeholder='Введите город...' />
      </div>

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
