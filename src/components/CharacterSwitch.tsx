import { useState, type FC, type ReactNode } from 'react';
import { SIGNS, type Signer } from '../signs';
import styles from '../styles/characterSwitch.module.css';

type CharacterType = Signer;
export type EmotionType = 'normal' | 'grumpy' | 'ashamed' | 'smile';

/** optimized image URLs built by Character.astro */
export type EmotionImages = Record<
  EmotionType,
  { src: string; srcSet: string; width: number; height: number; face: string }
>;

const EMOTIONS: { type: EmotionType; label: string }[] = [
  { type: 'normal', label: '通常' },
  { type: 'grumpy', label: '不機嫌' },
  { type: 'ashamed', label: '照れ' },
  { type: 'smile', label: '笑顔' },
];

type Profile = {
  name: ReactNode;
  height: number;
  weight: string;
  description: ReactNode;
  phrases: [ReactNode, ReactNode];
};

const PROFILES: Record<CharacterType, Profile> = {
  stella: {
    name: (
      <>
        <span className={styles.lineBreak}>シェフェール・</span>
        <span className={styles.lineBreak}>ステラ</span>
      </>
    ),
    height: 161,
    weight: '???',
    description: (
      <>
        流れ星を司るエリート天使の女の子。
        <br />
        天界からの使命を受けて人間界で7日間、
        <br />
        千ヶ崎蓮のアラーム係をすることになった。
        <br />
        性格は非常にしっかり者でスパルタ。
        <br />
        一方で世話焼きな一面もある。
        <br />
        モットーは「早寝早起き朝ごはん」。
      </>
    ),
    phrases: [
      <>
        <span className={styles.lineBreak}>「……なによその顔。</span>
        <span className={styles.lineBreak}>文句あるの？」</span>
      </>,
      <>
        <span className={styles.lineBreak}>「ないならよろしい。</span>
        <span className={styles.lineBreak}>また明日」</span>
      </>,
    ],
  },
  ren: {
    name: <>千ヶ崎&emsp;蓮</>,
    height: 174,
    weight: '57kg',
    description: (
      <>
        某TKB大学に通う大学2年生で本作の主人公。
        <br />
        怠惰な生活を送っていたが、
        <br />
        ステラと出会い一気に生活が急変。
        <br />
        毎朝早起きを迫られることになる。
      </>
    ),
    phrases: [
      <>
        <span className={styles.lineBreak}>ある夏の夜、</span>
        <span className={styles.lineBreak}>俺は空を見上げた。</span>
      </>,
      <>
        <span className={styles.lineBreak}>きらりと光る</span>
        <span className={styles.lineBreak}>流れ星を見た。</span>
      </>,
    ],
  },
};

type EmotionButtonsProps = {
  className: string;
  images: EmotionImages;
  emotion: EmotionType;
  onChange: (emotion: EmotionType) => void;
};

const EmotionButtons: FC<EmotionButtonsProps> = ({ className, images, emotion, onChange }) => (
  <div className={className} role="group" aria-label="表情の切り替え">
    {EMOTIONS.map(({ type, label }) => (
      <button
        key={type}
        type="button"
        aria-label={label}
        aria-pressed={emotion === type}
        className={`${styles.emotionButton} ${emotion === type ? styles[`${type}Active`] : styles.inActive}`}
        style={{ backgroundImage: `url(${images[type].face})` }}
        onClick={() => onChange(type)}
      ></button>
    ))}
  </div>
);

type CharacterSwitchProps = {
  images: EmotionImages;
};

export const CharacterSwitch: FC<CharacterSwitchProps> = ({ images }) => {
  const [emotion, setEmotion] = useState<EmotionType>('normal');
  const [character, setCharacter] = useState<CharacterType>('stella');

  const isStella = character === 'stella';
  const profile = PROFILES[character];
  const phraseClassName = `${styles.phrase} ${isStella ? styles.stellaPhrase : styles.renPhrase}`;
  const sign = SIGNS[character];
  const emotionLabel = EMOTIONS.find(({ type }) => type === emotion)?.label;
  const characterImage = (className: string) => (
    <img
      className={className}
      src={images[emotion].src}
      srcSet={images[emotion].srcSet}
      sizes="(min-width: 1196px) 320px, 250px"
      width={images[emotion].width}
      height={images[emotion].height}
      alt={`ステラ（${emotionLabel}）`}
    />
  );

  return (
    <>
      {/* character switch button */}
      <div className={styles.characterSwitchButtonBox} role="group" aria-label="登場人物の切り替え">
        <button
          type="button"
          aria-label="ステラ"
          aria-pressed={isStella}
          className={`${styles.characterSwitchButton} ${styles.stellaButton}`}
          style={{ backgroundImage: `url(${images.normal.face})` }}
          onClick={() => setCharacter('stella')}
        ></button>
        <div className={styles.separate} aria-hidden="true">
          /
        </div>
        <button
          type="button"
          aria-pressed={!isStella}
          className={styles.characterSwitchButton}
          onClick={() => setCharacter('ren')}
        >
          蓮
        </button>
      </div>
      <div className="note-number"></div>
      <div className={`grid-paper ${styles.container} ${isStella ? styles.stellaContainer : styles.renContainer}`}>
        <div className={styles.descriptionBox}>
          {/* description */}
          <h3 className={styles.title}>{profile.name}</h3>
          <br />
          {isStella && (
            <>
              {characterImage(styles.mobileCharacterImage)}
              <EmotionButtons
                className={styles.mobileEmotionButtonBox}
                images={images}
                emotion={emotion}
                onChange={setEmotion}
              />
            </>
          )}
          <p className={styles.description}>
            年齢 19歳 / 身長 {profile.height}cm / 体重 {profile.weight}
            <br />
            <br />
            {profile.description}
          </p>
          <br />
          <br />
          <strong className={phraseClassName}>{profile.phrases[0]}</strong>
          <br />
          <br />
          <strong className={phraseClassName}>{profile.phrases[1]}</strong>
          {/* sign image */}
          <div className={styles.signBox}>
            <img className={styles.signImage} src={sign.src} width={sign.width} height={sign.height} alt={sign.alt} />
          </div>
        </div>
        {isStella && (
          <>
            {characterImage(styles.pcCharacterImage)}
            <EmotionButtons
              className={styles.pcEmotionButtonBox}
              images={images}
              emotion={emotion}
              onChange={setEmotion}
            />
          </>
        )}
      </div>
    </>
  );
};
