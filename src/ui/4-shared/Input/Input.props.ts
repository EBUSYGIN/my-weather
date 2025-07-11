import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Icon } from '../Icon/Icon';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  label?: string;
  icon?: Icon;
}
