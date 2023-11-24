import Telegram from "../../assets/telegram.svg?react";
import Viber from "../../assets/viber.svg?react";
import Whatsup from "../../assets/whatsapp.svg?react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.heading}>О компании</h2>
        <a href="#" className={styles.text}>
          Партнёрская программа
        </a>
        <a href="#" className={styles.text}>
          Вакансии
        </a>
      </div>
      <div className={styles.menuContainer}>
        <h2 className={styles.heading}>Меню</h2>
        <nav className={styles.menuListContainer}>
          <ul className={styles.menuList}>
            <li>
              <a href="#" className={styles.text}>
                Расчёт стоимости
              </a>
            </li>
            <li>
              <a href="#" className={styles.text}>
                Услуги
              </a>
            </li>
            <li>
              <a href="#" className={styles.text}>
                Виджеты
              </a>
            </li>
            <li>
              <a href="#" className={styles.text}>
                Интеграции
              </a>
            </li>
            <li>
              <a href="#" className={styles.text}>
                Наши клиенты
              </a>
            </li>
          </ul>
          <ul className={styles.menuList}>
            <li>
              <a href="#" className={styles.text}>
                Кейсы
              </a>
            </li>
            <li>
              <a href="#" className={styles.text}>
                Благодарственные письма
              </a>
            </li>
            <li>
              <a href="#" className={styles.text}>
                Сертификаты
              </a>
            </li>
            <li>
              <a href="#" className={styles.text}>
                Блог на Youtube
              </a>
            </li>
            <li>
              <a href="#" className={styles.text}>
                Вопрос / Ответ
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.contactsContainer}>
        <h2 className={styles.heading}>Контакты</h2>
        <span>+7 555 555-55-55</span>
        <div className={styles.messengersList}>
          <Telegram />
          <Viber />
          <Whatsup />
        </div>
        <p>Москва, Путевой проезд 3с1, к 902</p>
        <small>
          &copy;WELBEX 2022. Все права защищены. Политика конфиденциальности
        </small>
      </div>
    </footer>
  );
};
export default Footer;
