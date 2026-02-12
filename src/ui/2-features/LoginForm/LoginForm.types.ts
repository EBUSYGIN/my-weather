import z from 'zod';

export const LoginFormSchema = z.object({
  email: z.email('Некорректный email адрес').min(1, 'Email обязателен'),
  password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
});

export type FormType = z.infer<typeof LoginFormSchema>;
