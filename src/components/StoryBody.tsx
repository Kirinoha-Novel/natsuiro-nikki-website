import { useEffect, useState, type FC } from 'react';
import { SIGNS } from '../signs';
import styles from '../styles/storyBody.module.css';

type StoryTextProps = {
  className: string;
  isMorning: boolean;
  /** vertical writing (PC) uses vertical ellipses and a dash before the mission */
  vertical: boolean;
};

const StoryText: FC<StoryTextProps> = ({ className, isMorning, vertical }) => {
  const ellipsis = <span className={styles.ellipsis}>{vertical ? '︙︙' : '……'}</span>;

  return (
    <p className={className}>
      {isMorning ? (
        <>
          「天界でトップの成績を収めたこの私に
          {ellipsis}
          <br />
          寝坊している大学生を起こせって
          {ellipsis}？」
        </>
      ) : (
        <>
          「{ellipsis}
          明日も来るから。覚悟しておきなさい」
        </>
      )}
      <br />
      長い長い夏休みは、一人で過ごすには退屈すぎた。
      <br />
      某TKB大学に通う大学二年生、千ヶ崎蓮は
      <br />
      休みをいいことに日々怠惰な生活を送っていた。
      <br />
      <span className={styles.blankLine}></span>
      そんな時現れたのは<span className={styles.dash}>――</span>
      <br />
      <span className={styles.blankLine}></span>
      「起きなさい！天界から来たわ！」
      <br />
      「使命の執行に来たの！」
      <br />
      <span className={styles.blankLine}></span>
      天界からやってきた天使、ステラ。
      <br />
      女神様から遣わされた彼女の使命は
      <br />
      {vertical ? (
        <>
          <span className={styles.dash}>――――</span>
          &nbsp;
        </>
      ) : (
        <span className={styles.blankLine}></span>
      )}
      <span className={styles.emphasis}>七日間千ヶ崎蓮を起こすこと。</span>
      <br />
      <span className={styles.blankLine}></span>
      「起きなさいって言ってるの！」
      <br />
      「任務遂行！片付けるから！」
      <br />
      とびきり世話焼きでちょっとスパルタな
      <br />
      彼女との七日間をどう過ごすかはあなた次第。
      <br />
    </p>
  );
};

const StoryBody: FC = () => {
  // 5:00 ~ 9:59 -> stella, other times -> ren
  const [isMorning, setIsMorning] = useState<boolean>(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsMorning(5 <= hour && hour <= 9);
  }, []);

  const sign = isMorning ? SIGNS.stella : SIGNS.ren;

  return (
    <>
      <div className={`grid-paper ${styles.gridPaper}`}>
        <StoryText className={styles.pcView} isMorning={isMorning} vertical />
        <StoryText className={styles.mobileView} isMorning={isMorning} vertical={false} />
      </div>
      <div className={styles.sign}>
        <img src={sign.src} alt={sign.alt} className={styles.signImg} width={sign.width} height={sign.height} />
      </div>
    </>
  );
};

export { StoryBody };
