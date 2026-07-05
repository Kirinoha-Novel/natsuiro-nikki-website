import { useEffect, useRef, type FC } from "react";
import styles from "../styles/grid-paper.module.css";

const GridPaper: FC = () => {
  const stellaImage = "/stella.webp";
  const renImage = "/ren-sign.webp";

  const isMorning = useRef<boolean>(false);

  useEffect(() => {
    const hour = new Date().getHours();
    console.log(`Time now: ${hour} o'clock`);
    /*
      5:00 ~ 9:00 -> stella
      other times -> ren
    */
    isMorning.current = 5 <= hour && hour <= 9;
  }, []);

  return (
    <>
      <div className={styles.gridPaper}>
        <p className={styles.pcView}>
          {isMorning.current ? (
            <>
              「天界でトップの成績を収めたこの私に
              <span className={styles.ellipsis}>︙︙</span>
              <br />
              寝坊している大学生を起こせって
              <span className={styles.ellipsis}>︙︙</span>？」
            </>
          ) : (
            <>
              「<span className={styles.ellipsis}>︙︙</span>
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
          <span className={styles.dash}>――――</span>
          &nbsp;
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
        <p className={styles.mobileView}>
          {isMorning.current ? (
            <>「もう、起きる時間よ。」</>
          ) : (
            <>
              「じゃあ、願いが見つかるまで、
              <br />
              毎朝起こしに来るわ。」
            </>
          )}
          <br />
          <br />
          長い長い夏休みは、
          <br />
          １人で過ごすには退屈すぎた。
          <br />
          夢も希望もない留年寸前の
          <br />
          大学生・蓮のもとに表れたのは、
          <br />
          なんでも願いを叶えてくれるという
          <br />
          期限付きの天使ステラ。
          <br />
          <br />
          願いのない蓮は、
          <br />
          本当の願いを見つけるまで
          <br />
          ステラに毎朝起こしてもらうことに。
          <br />
          <br />
          二人で過ごす、
          <br />
          ちょっと遅れた夏休み。
          <br />
          夏休みに終わりが見えても、
          <br />
          彼女の手を離せなかった。
          <br />
          甘くて、痛くて、
          <br />
          やさしい物語の行き先は<span className={styles.dash}>――</span>
          <br />
          依存か、自立か、それとも・・・。
          <br />
        </p>
      </div>
      <div className={styles.sign}>
        <img
          src={isMorning.current ? stellaImage : renImage}
          alt={isMorning.current ? "ステラのサイン" : "蓮のサイン"}
          className={styles.signImg}
          width={isMorning.current ? 1029 : 764}
          height={isMorning.current ? 330 : 259}
        />
      </div>
    </>
  );
};

export { GridPaper };

