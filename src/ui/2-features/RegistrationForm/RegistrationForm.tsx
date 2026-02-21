'use client';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterFormSchema, RegisterFormType } from '@/api/user/types';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerUser } from '@/api/user/handlers';
import { Button, Input, Title } from '@/ui/4-shared';

import styles from './RegistrationForm.module.css';

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormType> = async (userData) => {
    try {
      await registerUser(userData);
    } catch (e) {
      setError('email', {
        message: e instanceof Error ? e.message : 'Ошибка при регистрации',
      });
    }
  };

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit(onSubmit)}>
      <Title tag={'h1'} size={'l'}>
        Регистрация
      </Title>
      <Input
        label='Ваш email'
        placeholder='Введите ваш email'
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        label='Ваш пароль'
        placeholder='Введите ваш пароль'
        {...register('password')}
        error={errors.password?.message}
      />
      <Input
        label='Ваше имя'
        placeholder='Введите ваше имя'
        {...register('name')}
        error={errors.name?.message}
      />
      <Button appearance='ghost' className={styles.enterButton}>
        Зарегистрироваться
      </Button>
      <div className={styles.navActions}>
        <p>Есть аккаунт?</p>
        <Link href='/login'>Войти</Link>
      </div>
    </form>
  );
}
