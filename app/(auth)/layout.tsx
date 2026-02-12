import Image from 'next/image';
import logo from '@assets/images/logo.png';

import styles from './layout.module.css';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.authLayout}>
      <div className={styles.image}>
        <Image src={logo} alt='Логотип приложения' width={310} height={250} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
