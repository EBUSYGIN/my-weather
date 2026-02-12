import cn from 'classnames';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@app/styles/style.css';
import { Footer, Header } from '@/ui/1-widgets';
import { Container } from '@/ui/4-shared';

export const metadata: Metadata = {
  title: {
    template: '%s | My Weather',
    default: 'My Weather',
  },
  description:
    'My Weather — удобное приложение для просмотра прогноза погоды в реальном времени. Точные данные, прогноз на несколько дней, уведомления о погодных изменениях и удобный интерфейс.',
};

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn(poppins.className)}>
      <body>{children}</body>
    </html>
  );
}
