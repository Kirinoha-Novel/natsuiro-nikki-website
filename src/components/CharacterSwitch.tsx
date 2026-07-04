import { useState, type FC } from "react";
import styles from "../styles/characterSwitch.module.css";

type CharacterType = "stella" | "ren";
type EmotionType = "normal" | "grumpy" | "ashamed" | "smile";

export const CharacterSwitch: FC = () => {
  const [emotion, setEmotion] = useState<EmotionType>("normal");
  const [character, setCharacter] = useState<CharacterType>("stella");

  return (
    <>
      {/* character switch button */}
      {/* * character switch button ************************** */}
      <div className={styles.characterSwitchButtonBox}>
        <button
          className={`${styles.characterSwitchButton} ${styles.stellaButton}`}
          onClick={() => setCharacter("stella")}
        ></button>
        <div className={styles.separate}>/</div>
        <button className={styles.characterSwitchButton} onClick={() => setCharacter("ren")}>
          蓮
        </button>
      </div>
      <div className={styles.subTitle}>
        <p className={styles.number}>No.</p>
      </div>
      {/* * character switch button ************************** */}
      <div
        className={`${styles.container} ${character === "stella" ? styles.stellaContainer : styles.renContainer}`}
      >
        <div className={styles.descriptionBox}>
          {/** description **/}
          <h1 className={styles.title}>
            {character === "stella" ? (
              <>
                <span className={styles.lineBreak}>シェフェール・</span>
                <span className={styles.lineBreak}>ステラ</span>
              </>
            ) : (
              <>千ヶ崎&emsp;蓮</>
            )}
          </h1>
          <br />
          {/** mobile character image **/}
          {/* * mobile character image ************************** */}
          {character === "stella" ? (
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
          {character === "stella" ? (
            <div className={styles.mobileEmotionButtonBox}>
              <button
                className={`${styles.emotionButton} ${styles.normal} ${emotion === "normal" ? styles.normalActive : styles.inActive}`}
                onClick={() => setEmotion("normal")}
              ></button>
              <button
                className={`${styles.emotionButton} ${styles.grumpy} ${emotion === "grumpy" ? styles.grumpyActive : styles.inActive}`}
                onClick={() => setEmotion("grumpy")}
              ></button>
              <button
                className={`${styles.emotionButton} ${styles.ashamed} ${emotion === "ashamed" ? styles.ashamedActive : styles.inActive}`}
                onClick={() => setEmotion("ashamed")}
              ></button>
              <button
                className={`${styles.emotionButton} ${styles.smile} ${emotion === "smile" ? styles.smileActive : styles.inActive}`}
                onClick={() => setEmotion("smile")}
              ></button>
            </div>
          ) : null}
          {/* * mobile emotion button ************************** */}
          <p className={styles.description}>
            年齢 19歳 / 身長 {character === "stella" ? 161 : 174}cm / 体重{" "}
            {character === "stella" ? "???" : "57kg"}
            <br />
            <br />
            {character === "stella" ? (
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
            ) : (
              <>
                某TKB大学に通う大学2年生で本作の主人公。
                <br />
                怠惰な生活を送っていたが、
                <br />
                ステラと出会い一気に生活が急変。
                <br />
                毎朝早起きを迫られることになる。
              </>
            )}
          </p>
          <br />
          <br />
          <strong
            className={`${styles.phrase} ${character === "stella" ? styles.stellaPhrase : styles.renPhrase}`}
          >
            {character === "stella" ? (
              <>
                <span className={styles.lineBreak}>「……なによその顔。</span>
                <span className={styles.lineBreak}>文句あるの？」</span>
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
          <strong
            className={`${styles.phrase} ${character === "stella" ? styles.stellaPhrase : styles.renPhrase}`}
          >
            {character === "stella" ? (
              <>
                <span className={styles.lineBreak}>「ないならよろしい。</span>
                <span className={styles.lineBreak}>また明日」</span>
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
            <img
              className={styles.signImage}
              src={`/${character}-sign.webp`}
              width={764}
              height={259}
              alt="サイン"
            />
          </div>
          {/* * sign image ************************** */}
        </div>

        {/* pc character image */}
        {/* * pc character image ************************** */}
        {character === "stella" ? (
          <img
            className={styles.pcCharacterImage}
            src={`/${emotion}.webp`}
            width={720}
            height={1918}
            alt="ステラ"
          />
        ) : null}
        {/* * pc character image ************************** */}
        {/* pc emotion button */}
        {/* * pc emotion button ************************** */}
        {character === "stella" ? (
          <div className={styles.pcEmotionButtonBox}>
            <button
              className={`${styles.emotionButton} ${styles.normal} ${emotion === "normal" ? styles.normalActive : styles.inActive}`}
              onClick={() => setEmotion("normal")}
            ></button>
            <button
              className={`${styles.emotionButton} ${styles.grumpy} ${emotion === "grumpy" ? styles.grumpyActive : styles.inActive}`}
              onClick={() => setEmotion("grumpy")}
            ></button>
            <button
              className={`${styles.emotionButton} ${styles.ashamed} ${emotion === "ashamed" ? styles.ashamedActive : styles.inActive}`}
              onClick={() => setEmotion("ashamed")}
            ></button>
            <button
              className={`${styles.emotionButton} ${styles.smile} ${emotion === "smile" ? styles.smileActive : styles.inActive}`}
              onClick={() => setEmotion("smile")}
            ></button>
          </div>
        ) : null}
        {/* * pc emotion button ************************** */}
      </div>
    </>
  );
};

