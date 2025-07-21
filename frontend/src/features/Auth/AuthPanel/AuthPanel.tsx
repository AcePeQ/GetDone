import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import styles from "./AuthPanel.module.css";
import RegisterForm from "../RegisterForm/RegisterForm";

function AuthPanel() {
  const [isLoginPanel, setIsLoginPanel] = useState(true);

  function togglePanels() {
    setIsLoginPanel((prev) => (prev === true ? false : true));
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {isLoginPanel && (
          <>
            Welcome, <p>Sign into your account!</p>
          </>
        )}

        {!isLoginPanel && (
          <>
            New to GetDone, <p>Create your account!</p>
          </>
        )}
      </h1>

      <div className={styles.formContainer}>
        {isLoginPanel ? <LoginForm /> : <RegisterForm />}
      </div>

      <button onClick={togglePanels} className={styles.cta}>
        {isLoginPanel
          ? "New to GetDone? Create account!"
          : "Already have account? Sign into your account"}
      </button>
    </div>
  );
}

export default AuthPanel;
