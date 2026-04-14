import cn from 'classnames';

import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Icon } from '../Icon/Icon';

export function Button({
  children,
  buttonType,
  appearance,
  className,
  ...props
}: ButtonProps) {
  if (buttonType === 'toggler') {
    return (
      <button className={cn(styles.toggler, className)}>
        <Icon.Star className={cn(styles.icon)} {...props} />
        {children}
      </button>
    );
  }

  return (
    <button
      className={cn(styles.button, styles[appearance], className)}
      {...props}
    >
      {children}
    </button>
  );
}
