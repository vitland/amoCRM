import styles from "./Navigation.module.css"
const Navigation = () => {
  return (
    <nav className={styles.container}>
      <a href="#">Услуги</a>
      <a href="#">Виджеты</a>
      <a href="#">Интеграции</a>
      <a href="#">Кейсы</a>
      <a href="#">Сертификаты</a>
    </nav>
  );
};
export default Navigation;
