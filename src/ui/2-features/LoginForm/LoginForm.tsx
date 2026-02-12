'use client';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Input, Title } from '@/ui/4-shared';

import { FormType, LoginFormSchema } from './LoginForm.types';
import styles from './LoginForm.module.css';
import { zodResolver } from '@hookform/resolvers/zod';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Title tag={'h1'} size={'l'}>
        Вход
      </Title>
      <Input
        placeholder='Введите вашу почту'
        label='Email'
        type='email'
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        placeholder='Введите ваш  пароль'
        label='Пароль'
        type='password'
        error={errors.password?.message}
        {...register('password')}
      />
      <Button appearance='ghost' className={styles.enterButton}>
        Вход
      </Button>
      <div className={styles.navActions}>
        <p>Нет аккаунта?</p>
        <Link href='/register'>Зарегистрироваться</Link>
      </div>
    </form>
  );
}
