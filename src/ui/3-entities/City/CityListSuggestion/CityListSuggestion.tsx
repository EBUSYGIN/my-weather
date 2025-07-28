import Link from 'next/link';

import { CityListSuggestionProps } from './CityListSuggestion.props';
import styles from './CityListSuggestion.module.css';

export function CityListSuggestion({
  city,
  region,
  onClose,
}: CityListSuggestionProps) {
  return (
    <li onClick={() => onClose((prevState) => !prevState)}>
      <Link href={`/${encodeURIComponent(city)}`} className={styles.link}>
        <span className={styles.name}>{city}</span>
        <span className={styles.region}>{region}</span>
      </Link>
    </li>
  );
}
