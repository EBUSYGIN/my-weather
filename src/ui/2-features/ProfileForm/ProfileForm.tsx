'use client';

import { Button, Input, Title } from '@/ui/4-shared';
import Image from 'next/image';

import styles from './ProfileForm.module.css';

export function ProfileForm() {
  return (
    <form className={styles.form}>
      <div className={styles.userHeadInfo}>
        <div className={styles.fio}>
          <Image
            src={'/user-icons/stone.png'}
            alt={'Фотография пользователя'}
            width={100}
            height={100}
          />
          <Title tag={'h2'} size={'s'}>
            Здравствуйте, Фамилия имя отчество!
          </Title>
        </div>
        <div className={styles.actions}>
          <Button appearance={'ghost'}>Изменить</Button>
        </div>
      </div>

      <div className={styles.personalInfoContainer}>
        <Title tag={'h2'} size={'s'}>
          Ваши данные
        </Title>
        <Input label='Имя' />
        <Input label='Email' />
      </div>
    </form>
  );
}
