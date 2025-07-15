import Image from 'next/image';

import { Title } from '@/ui/4-shared';

import styles from './HomeMiddle.module.css';

export function HomeMiddle() {
  return (
    <div className={styles.middle}>
      <div className={styles.textWrapper}>
        <Title tag='h1' size='m'>
          Добро пожаловать на My Weather!
        </Title>
        <div>
          <p className={styles.firstParagraph}>
            В My Weather мы считаем, что погода должна быть не просто
            информацией, она должна быть четкой, красивой и полезной.
          </p>
          <p className={styles.text}>
            Это приложение было создано для того, чтобы помочь вам подготовиться
            к предстоящему дню благодаря точным прогнозам, потрясающим
            визуальным эффектам и интеллектуальным функциям, благодаря которым
            проверка погоды становится не рутинной работой, а скорее взглядом на
            небо.
          </p>
          <p>
            Планируете ли вы поездку, одеваетесь на день или просто
            интересуетесь облаками над головой
          </p>
        </div>
      </div>

      <Image
        width={310}
        height={250}
        src={'/logo.png'}
        alt='Логотип My Weather'
        className={styles.image}
      />
    </div>
  );
}
