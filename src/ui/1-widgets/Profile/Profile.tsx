import { Button, Title } from '@/ui/4-shared';
import Image from 'next/image';

import styles from './Profile.module.css';

export function Profile() {
  return (
    <>
      <div className={styles.userHeadInfo}>
        <div className={styles.fio}>
          <Image
            src={'/user-icons/stone.png'}
            alt={'Фотография пользователя'}
            width={100}
            height={100}
          />
          <div>
            <Title tag={'h2'} size={'s'}>
              Здравствуйте, Фамилия имя отчество!
            </Title>
            <div className={styles.userEmail}>e@gmail.com</div>
          </div>
        </div>
        <div className={styles.actions}>
          <Button appearance={'ghost'}>Изменить</Button>
        </div>
      </div>
    </>
  );
}
