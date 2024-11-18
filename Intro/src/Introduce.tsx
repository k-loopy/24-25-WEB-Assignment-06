import React from "react";
import styles from "./Introduce.module.less";

interface IntroduceProps {
  song: string;
  year: string;
}

const Introduce: React.FC<IntroduceProps> = ({ song, year }) => {
  return (
    <div className={styles.introduce}>
      <h2 className={styles.songTitle}> 가장 좋아하는 음악은: {song}</h2>
      <h3 className={styles.songYear}> 이 곡을 좋아하게 된 연도는: {year}</h3>
    </div>
  );
};

export default Introduce;
