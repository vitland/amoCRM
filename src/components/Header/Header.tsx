import Logo from "../Logo/Logo";
import Telegram from "../../assets/telegram.svg?react";
import Viber from "../../assets/viber.svg?react";
import Whatsup from "../../assets/whatsapp.svg?react";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Navigation />
      <div className={styles.contactsContainer}>
        <span>+7 555 555-55-55</span>
        <div className={styles.iconsContainer}>
          <Telegram />
          <Viber />
          <Whatsup />
        </div>
      </div>
    </div>
  );
};
export default Header;
