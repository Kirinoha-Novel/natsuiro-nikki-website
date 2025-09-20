import { useEffect, useState, type FC } from 'react';
import Cookies from 'js-cookie';
import styles from '../styles/loading.module.css';

const Loading: FC = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const isVisited = Cookies.get('visited');

    const time = 2000;

    if (!isVisited) {
      // show loading screen
      setShowLoading(true);
      // show text
      setShowText(true);

      // set a cookie to indicate the user has visited
      Cookies.set('visited', 'true', { expires: 1, path: '/' });

      // show loading for 2 seconds
      setTimeout(() => {
        setShowLoading(false);
      }, time);
      // start fade out after 1.8 second
      setTimeout(() => {
        setFadeOut(true);
      }, time - 200);
      // hide text after 1.78 seconds
      setTimeout(() => {
        setShowText(false);
      }, time - 220);
    }
  }, []);

  return (
    <>
      {showLoading && (
        <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`}>
          {showText && <p className={styles.title}>少女と過ごす、少し不思議な夏休み</p>}
        </div>
      )}
    </>
  );
};

export { Loading };
