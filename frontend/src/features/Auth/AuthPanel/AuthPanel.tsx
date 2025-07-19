import LoginForm from "../LoginForm/LoginForm";
import styles from "./AuthPanel.module.css";

function AuthPanel() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Welcome, <p>Sign into your account!</p>
      </h1>

      <div className={styles.formContainer}>
        <LoginForm />
      </div>

      <button className={styles.cta}>New to GetDone? Create account!</button>
    </div>
  );
}

export default AuthPanel;
