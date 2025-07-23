import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import AuthPanel from "../../features/Auth/AuthPanel/AuthPanel";
import styles from "./Homepage.module.css";
import { useEffect } from "react";
import { useUserStore } from "../../stores/useUserStore";

function Homepage() {
  const { user } = useUserStore();
  const naviagate = useNavigate();

  useEffect(() => {
    if (user) {
      naviagate("/getdone", { replace: true });
    }
  }, [naviagate, user]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.homepage}>
        <div className={styles.container}>
          <Logo size="big" />
          <AuthPanel />
        </div>
      </section>
    </div>
  );
}

export default Homepage;
