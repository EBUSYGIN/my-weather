'use client';

import cn from 'classnames';

import { useCallback, useState } from 'react';
import styles from './ThemeToggler.module.css';

export function ThemeToggler() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const switchTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const themeToSwitch = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', themeToSwitch);
      return themeToSwitch;
    });
  }, []);

  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <button
          className={cn(styles.toggler, styles[theme])}
          name='Кнопка смены темы'
          onClick={switchTheme}
        ></button>
      </div>
      <span>{theme === 'light' ? 'Солнечно!' : 'Облачно!'}</span>
    </div>
  );
}
