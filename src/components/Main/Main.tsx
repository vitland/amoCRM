import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.content}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>
          Зарабатывайте больше <br />
          <span>с WELBEX</span>
        </h1>
        <p className={styles.subheading}>
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.textHeading}>
          Вместе с <span>бесплатной</span> <span>консультацией</span> мы дарим:
        </h2>
        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Виджеты</h3>
          <span className={styles.cardText}>30 готовых решений</span>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Dashboard</h3>
          <span className={styles.cardText}>с показателями вашего бизнеса</span>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Skype Аудит</h3>
          <span className={styles.cardText}>отдела продажи CRM системы</span>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardHeading}>35 дней</h3>
          <span className={styles.cardText}>использования CRM</span>
        </div>
        <button className={styles.button}>Получить консультацию</button>
      </div>
    </main>
  );
};
export default Main;
