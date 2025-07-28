import {
  DetailedHTMLProps,
  Dispatch,
  LiHTMLAttributes,
  SetStateAction,
} from 'react';

export interface CityListSuggestionProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  onClose: Dispatch<SetStateAction<boolean>>;
  city: string;
  region: string;
}
