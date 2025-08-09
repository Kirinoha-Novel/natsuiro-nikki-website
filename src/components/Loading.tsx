import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '../styles/loading.module.css';

const Loading = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const isVisited = Cookies.get('visited');

    if (!isVisited) {
      // show loading screen
      setShowLoading(true);
      // show text
      setShowText(true);

      // set a cookie to indicate the user has visited
      Cookies.set('visited', 'true', { expires: 1, path: '/' });

      // show loading for 1.3 seconds
      setTimeout(() => {
        setShowLoading(false);
      }, 1300);
      // start fade out after 1 second
      setTimeout(() => {
        setFadeOut(true);
      }, 1000);
      // hide text after 0.98 seconds
      setTimeout(() => {
        setShowText(false);
      }, 980);

      // // show loading for 1.3 seconds
      // setTimeout(() => {
      //   setShowLoading(false);
      // }, 13000);
      // // start fade out after 1 second
      // setTimeout(() => {
      //   setFadeOut(true);
      // }, 10000);
      // // hide text after 0.98 seconds
      // setTimeout(() => {
      //   setShowText(false);
      // }, 9800);

      // tmp
      Cookies.remove('visited', { path: '/' });
    }
  }, []);

  return (
    <>
      {showLoading && (
        <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`}>
          {showText && <h1 className={styles.title}>少女と過ごす、少し不思議な夏休み</h1>}
        </div>
      )}
    </>
  );
};

export { Loading };
