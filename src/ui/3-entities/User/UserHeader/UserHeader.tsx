'use client';

import { userHandlers } from '@/api/user/handlers';
import { Button, Title } from '@/ui/4-shared';
import Image from 'next/image';
import { IUserInfoResponse } from '@/api/user/types';
import { useAnyInfo } from '@/assets/hooks/useAnyInfo';

import styles from './UserHeader.module.css';

export function UserHeader() {
  const { data } = useAnyInfo<IUserInfoResponse>(
    'user',
    userHandlers.getUserInfo,
  );

  return (
    <>
      <div className={styles.userHeadInfo}>
        <div className={styles.fio}>
          <Image
            className={styles.photo}
            src={'/user-icons/stone.png'}
            alt={'Фотография пользователя'}
            width={100}
            height={100}
          />
          <div>
            <Title tag={'h2'} size={'s'}>
              {`Здравствуйте, ${data?.userInfo.name}`}
            </Title>
            <div className={styles.userEmail}>{data?.userInfo.email}</div>
          </div>
        </div>
        <div className={styles.actions}>
          <Button appearance={'ghost'}>Редактировать данные</Button>
        </div>
      </div>
    </>
  );
}
