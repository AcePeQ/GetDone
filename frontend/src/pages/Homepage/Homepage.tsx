import Logo from "../../components/Logo/Logo";
import AuthPanel from "../../features/Auth/AuthPanel/AuthPanel";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.homepage}>
        <div>
          <Logo size="big" />
          <AuthPanel />
        </div>
      </section>
    </div>
  );
}

export default Homepage;
