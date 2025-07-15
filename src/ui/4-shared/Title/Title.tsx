import cn from 'classnames';

import { createElement } from 'react';

import { TitleProps } from './Title.props';
import styles from './Title.module.css';

export function Title({ tag, children, size }: TitleProps) {
  return createElement(tag, {
    className: cn(styles.title, styles[size]),
    children,
  });
}
