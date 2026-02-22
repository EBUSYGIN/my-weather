import z, { email } from 'zod';

export const LoginFormSchema = z.object({
  email: z.email('Некорректный email адрес').min(1, 'Email обязателен'),
  password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;

export interface ITokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const RegisterFormSchema = z.object({
  email: z.email('Некорректный email адрес').min(1, 'Email обязателен'),
  password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
  name: z.string().min(2, 'Введите корректное имя'),
});

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export interface IUserResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
