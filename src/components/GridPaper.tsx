import { useEffect, useRef, type FC } from 'react';
import styles from '../styles/grid-paper.module.css';

const GridPaper: FC = () => {
  const stellaImage = '/stella.webp';
  const renImage = '/ren-sign.webp';

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
          長い長い夏休みは、１人で過ごすには退屈すぎた。
          <br />
          夢も希望もない留年寸前の
          <br />
          大学生・蓮のもとに表れたのは、
          <br />
          なんでも願いを叶えてくれるという
          <br />
          期限付きの天使ステラ。
          <br />
          願いのない蓮は、本当の願いを見つけるまで
          <br />
          ステラに毎朝起こしてもらうことに。
          <br />
          <br />
          二人で過ごす、ちょっと遅れた夏休み。
          <br />
          夏休みに終わりが見えても、彼女の手を離せなかった。
          <br />
          甘くて、痛くて、やさしい物語の行き先は<span className={styles.dash}>――</span>
          <br />
          依存か、自立か、それとも・・・。
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
          alt={isMorning.current ? 'ステラのサイン' : '蓮のサイン'}
          className={styles.signImg}
          width={isMorning.current ? 1029 : 764}
          height={isMorning.current ? 330 : 259}
        />
      </div>
    </>
  );
};

export { GridPaper };
