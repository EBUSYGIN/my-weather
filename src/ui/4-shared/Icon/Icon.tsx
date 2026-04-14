import Logo from '@assets/images/icons/logo.svg';
import Magnifier from '@assets/images/icons/magnifier.svg';
import BackArrow from '@assets/images/icons/back-arrow.svg';
import Star from '@assets/images/icons/star.svg';

export const Icon = {
  Logo,
  Magnifier,
  BackArrow,
  Star,
};

export type Icon = keyof typeof Icon;
