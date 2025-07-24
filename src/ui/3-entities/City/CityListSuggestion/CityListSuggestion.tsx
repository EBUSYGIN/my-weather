import Link from 'next/link';

import { CityListSuggestionProps } from './CityListSuggestion.props';

export function CityListSuggestion({ city, onClose }: CityListSuggestionProps) {
  return (
    <li onClick={() => onClose((prevState) => !prevState)}>
      <Link href={`/${encodeURIComponent(city)}`}>{city}</Link>
    </li>
  );
}
