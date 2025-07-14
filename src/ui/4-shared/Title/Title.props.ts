import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 's' | 'm' | 'l' | 'xl';
  // 30, 35, 50,  60
}
