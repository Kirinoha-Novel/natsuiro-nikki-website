import { useState, useEffect, type FC } from 'react';
import styles from '../styles/footer.module.css';

const Footer: FC = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.text}>&copy; {year} きりのはのべる.</p>
        <p className={styles.text}>Created by Yuki Osada (Myxogastria0808).</p>
      </div>
    </footer>
  );
};

export { Footer };
