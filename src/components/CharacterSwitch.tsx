import { useState, type FC } from 'react';
import styles from '../styles/characterSwitch.module.css';

type CharacterType = 'stella' | 'ren';
type EmotionType = 'normal' | 'grumpy' | 'ashamed' | 'smile';

export const CharacterSwitch: FC = () => {
  const [emotion, setEmotion] = useState<EmotionType>('normal');
  const [character, setCharacter] = useState<CharacterType>('stella');

  return (
    <>
      <div className={styles.characterSwitchButtonBox}>
        <button
          className={`${styles.characterSwitchButton} ${styles.stellaButton}`}
          onClick={() => setCharacter('stella')}
        ></button>
        <p className={styles.separate}>/</p>
        <button className={`${styles.characterSwitchButton} ${styles.renButton}`} onClick={() => setCharacter('ren')}>
          蓮
        </button>
      </div>
      <div className={`${styles.container} ${character === 'stella' ? styles.stellaContainer : styles.renContainer}`}>
        {/* description */}
        {/* *************************** */}
        <div>
          <h1 className={styles.title}>{character === 'stella' ? 'シェフェール・ステラ' : '千ヶ崎　蓮'}</h1>
          <br />
          <p className={styles.description}>
            年齢 {character === 'stella' ? 19 : 19}歳 / 身長 {character === 'stella' ? 161 : 174}cm
            <br />
            <br />
            {character === 'stella' ? (
              <>
                流れ星を司る天使の女の子。
                <br />
                星を空に振らせて人間の願いを感じとり、その願いを叶えることができる。
                <br />
                蓮が真の願いを見つけるまでアラーム係をすることになった。
                <br />
                性格は、しっかり者で世話焼き。
                <br />
                モットーは「早寝早起き朝ごはん」。
              </>
            ) : (
              <>
                筑田大学の理学部に通う大学2年生で、本作の主人公。
                <br />
                大学入学後、目標を見失って生活が崩壊。
                <br />
                留年の危機にまで陥ってしまう。
                <br />
                そのせいなのかこれといった願望がなく、日々を無気力に過ごしている。
                <br />
                現在はしてはいないものの、料理が得意。
                <br />
                おとなしい妹がいる。
              </>
            )}
          </p>
          <br />
          <br />
          <strong className={`${styles.phrase} ${character === 'stella' ? styles.stellaPhrase : styles.renPhrase}`}>
            {character === 'stella' ? '「ほら！起きなさい！！」' : 'ある夏の夜、僕は空を見上げた。'}
          </strong>
          <br />
          <br />
          <strong className={`${styles.phrase} ${character === 'stella' ? styles.stellaPhrase : styles.renPhrase}`}>
            {character === 'stella' ? '「起きないと布団引き剥がしの刑よ！」' : 'きらりと光る流れ星を見た。'}
          </strong>
        </div>
        {/* *************************** */}
        {/* sign image */}
        {/* *************************** */}
        {character === 'stella' ? (
          <div className={styles.stellaSignContainer}>
            <div className={styles.stellaSignBox}>
              <img
                className={styles.stellaSignImage}
                src={`/stella-sign.webp`}
                width={1029}
                height={330}
                alt="ステラのサイン"
              />
            </div>
          </div>
        ) : (
          <div className={styles.renSignContainer}>
            <div className={styles.renSignBox}>
              <img className={styles.renSignImage} src={`/ren-sign.webp`} width={764} height={259} alt="蓮のサイン" />
            </div>
          </div>
        )}
        {/* *************************** */}
        {/* character image */}
        {/* *************************** */}
        {character === 'stella' ? (
          <img className={styles.characterImage} src={`/${emotion}.webp`} width={720} height={1918} alt="ステラ" />
        ) : (
          <></>
        )}
        {/* *************************** */}
        {/* emotion button */}
        {/* *************************** */}
        {character === 'stella' ? (
          <div className={styles.emotionButtonBox}>
            <button
              className={`${styles.emotionButton} ${styles.normal} ${emotion === 'normal' ? styles.normalActive : styles.inActive}`}
              onClick={() => setEmotion('normal')}
            ></button>
            <button
              className={`${styles.emotionButton} ${styles.grumpy} ${emotion === 'grumpy' ? styles.grumpyActive : styles.inActive}`}
              onClick={() => setEmotion('grumpy')}
            ></button>
            <button
              className={`${styles.emotionButton} ${styles.ashamed} ${emotion === 'ashamed' ? styles.ashamedActive : styles.inActive}`}
              onClick={() => setEmotion('ashamed')}
            ></button>
            <button
              className={`${styles.emotionButton} ${styles.smile} ${emotion === 'smile' ? styles.smileActive : styles.inActive}`}
              onClick={() => setEmotion('smile')}
            ></button>
          </div>
        ) : (
          <></>
        )}
        {/* *************************** */}
      </div>
    </>
  );
};
