import cn from 'classnames';

import { Icon } from '../Icon/Icon';

import { InputProps } from './Input.props';
import styles from './Input.module.css';

export function Input({
  placeholder,
  label,
  error,
  icon,
  className,
  ...props
}: InputProps) {
  const IconComponent = icon && Icon[icon];

  return (
    <label className={cn(styles.inputBox, className)}>
      {label && <span>{label}</span>}
      <div className={styles.inputWrapper}>
        {IconComponent && <IconComponent className={styles.icon} />}
        <input className={styles.input} placeholder={placeholder} {...props} />
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
