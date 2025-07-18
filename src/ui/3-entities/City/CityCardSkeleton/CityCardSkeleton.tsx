import { Card } from '@/ui/4-shared';

import styles from './CityCardSkeleton.module.css';

export function CityCardSkeleton() {
  return <Card className={styles.skeleton}></Card>;
}
