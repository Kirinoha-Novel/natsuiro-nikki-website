import { useEffect, useState, type FC } from 'react';
import Cookies from 'js-cookie';
import styles from '../styles/loading.module.css';

const Loading: FC = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    if (Cookies.get('visited')) return;

    const time = 2000;

    // show loading screen and text
    setShowLoading(true);
    setShowText(true);

    // set a cookie to indicate the user has visited
    Cookies.set('visited', 'true', { expires: 1, path: '/', sameSite: 'lax' });

    const timers = [
      // hide text after 1.78 seconds
      setTimeout(() => setShowText(false), time - 220),
      // start fade out after 1.8 seconds
      setTimeout(() => setFadeOut(true), time - 200),
      // hide loading after 2 seconds
      setTimeout(() => setShowLoading(false), time),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    showLoading && (
      <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`}>
        {showText && <p className={styles.title}>少女と過ごす、少し不思議な夏休み</p>}
      </div>
    )
  );
};

export { Loading };
