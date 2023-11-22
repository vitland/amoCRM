import Background from "../Background/Background";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./Landing.module.css";


const Landing = () => {
  return (
    <div className={styles.content}>
      <Background/>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default Landing;
