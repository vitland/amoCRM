import RedBall from "../../assets/red ball.svg?react";
import PurpleBall from "../../assets/purple ball.svg?react";
import styles from "./Background.module.css";

const Background = () => {
  return (
    <div className={styles.content}>
      <PurpleBall className={styles.purpleBall} />
      <div className={styles.purpleLight}></div>
      <div className={styles.redLight}></div>
      <RedBall className={styles.redBallBig} />
      <RedBall className={styles.redBallSmall} />
    </div>
  );
};
export default Background;
