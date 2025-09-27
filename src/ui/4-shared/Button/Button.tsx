import cn from 'classnames';

import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export function Button({ children, appearance }: ButtonProps) {
  return (
    <button className={cn(styles.button, styles[appearance])}>
      {children}
    </button>
  );
}
