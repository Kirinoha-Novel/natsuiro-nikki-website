import { useState, type FC } from 'react';
import styles from '../styles/characterSwitch.module.css';

type CharacterType = 'stella' | 'ren';
type EmotionType = 'normal' | 'grumpy' | 'ashamed' | 'smile';

export const CharacterSwitch: FC = () => {
  const [emotion, setEmotion] = useState<EmotionType>('normal');
  const [character, setCharacter] = useState<CharacterType>('stella');

  return (
    <>
      {/* character switch button */}
      {/* * character switch button ************************** */}
      <div className={styles.characterSwitchButtonBox}>
        <button
          className={`${styles.characterSwitchButton} ${styles.stellaButton}`}
          onClick={() => setCharacter('stella')}
        ></button>
        <div className={styles.separate}>/</div>
        <button className={`${styles.characterSwitchButton} ${styles.renButton}`} onClick={() => setCharacter('ren')}>
          蓮
        </button>
      </div>
      {/* * character switch button ************************** */}
      <div className={`${styles.container} ${character === 'stella' ? styles.stellaContainer : styles.renContainer}`}>
        <div className={styles.descriptionBox}>
          {/** description **/}
          <h1 className={styles.title}>{character === 'stella' ? 'シェフェール・ステラ' : '千ヶ崎　蓮'}</h1>
          <br />
          {/** mobile character image **/}
          {/* * mobile character image ************************** */}
          {character === 'stella' ? (
            <img
              className={styles.mobileCharacterImage}
              src={`/${emotion}.webp`}
              width={720}
              height={1918}
              alt="ステラ"
            />
          ) : null}
          {/* * mobile character image ************************** */}
          {/* mobile emotion button */}
          {/* * mobile emotion button ************************** */}
          {character === 'stella' ? (
            <div className={styles.mobileEmotionButtonBox}>
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
          ) : null}
          {/* * mobile emotion button ************************** */}
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
            {character === 'stella' ? (
              <>
                <span className={styles.lineBreak}>「ほら！</span>
                <span className={styles.lineBreak}>起きなさい！！」</span>
              </>
            ) : (
              <>
                <span className={styles.lineBreak}>ある夏の夜、</span>
                <span className={styles.lineBreak}>俺は空を見上げた。</span>
              </>
            )}
          </strong>
          <br />
          <br />
          <strong className={`${styles.phrase} ${character === 'stella' ? styles.stellaPhrase : styles.renPhrase}`}>
            {character === 'stella' ? (
              <>
                <span className={styles.lineBreak}>「起きないと</span>
                <span className={styles.lineBreak}>布団引き剥がし</span>
                <span className={styles.lineBreak}>の刑よ！」</span>
              </>
            ) : (
              <>
                <span className={styles.lineBreak}>きらりと光る</span>
                <span className={styles.lineBreak}>流れ星を見た。</span>
              </>
            )}
          </strong>
          {/* sign image */}
          {/* * sign image ************************** */}
          <div className={styles.signBox}>
            <img className={styles.signImage} src={`/${character}-sign.webp`} width={764} height={259} alt="サイン" />
          </div>
          {/* * sign image ************************** */}
        </div>

        {/* pc character image */}
        {/* * pc character image ************************** */}
        {character === 'stella' ? (
          <img className={styles.pcCharacterImage} src={`/${emotion}.webp`} width={720} height={1918} alt="ステラ" />
        ) : null}
        {/* * pc character image ************************** */}
        {/* pc emotion button */}
        {/* * pc emotion button ************************** */}
        {character === 'stella' ? (
          <div className={styles.pcEmotionButtonBox}>
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
        ) : null}
        {/* * pc emotion button ************************** */}
      </div>
    </>
  );
};
