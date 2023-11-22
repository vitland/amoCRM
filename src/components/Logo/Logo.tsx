import Logo1 from "../../assets/logo_part1.svg?react";
import Logo2 from "../../assets/logo_part2.svg?react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo1 />
        <Logo2 />
      </div>
      <p className={styles.subtitle}>
        Крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </div>
  );
};
export default Logo;
