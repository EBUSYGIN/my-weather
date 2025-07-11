import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      &#169; {new Date().getFullYear()} My Weather. Все права защищены
    </footer>
  );
}
