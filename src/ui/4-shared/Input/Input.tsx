import { Icon } from '../Icon/Icon';

import { InputProps } from './Input.props';
import styles from './Input.module.css';

export function Input({
  placeholder,
  label,
  error,
  icon,
  ...props
}: InputProps) {
  const IconComponent = icon && Icon[icon];

  return (
    <label className={styles.inputBox}>
      {label && <span></span>}
      <div className={styles.inputWrapper}>
        {IconComponent && <IconComponent className={styles.icon} />}
        <input className={styles.input} placeholder={placeholder} {...props} />
      </div>

      {error && <span></span>}
    </label>
  );
}
