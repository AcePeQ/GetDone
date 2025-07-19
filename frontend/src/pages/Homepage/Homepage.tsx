import Logo from "../../components/Logo/Logo";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.homepage}>
        <Logo size="big" />
      </section>
    </div>
  );
}

export default Homepage;
