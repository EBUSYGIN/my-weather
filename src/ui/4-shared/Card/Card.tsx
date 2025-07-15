import cn from 'classnames';

import styles from './Card.module.css';
import { CardProps } from './Card.props';

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  );
}
