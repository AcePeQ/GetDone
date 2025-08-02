import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import styles from "./AuthPanel.module.css";
import RegisterForm from "../RegisterForm/RegisterForm";

import { AnimatePresence, motion } from "motion/react";

function AuthPanel() {
  const [isLoginPanel, setIsLoginPanel] = useState(true);

  function togglePanels() {
    setIsLoginPanel((prev) => (prev === true ? false : true));
  }

  function handleChangeToLoginPanel() {
    setIsLoginPanel(true);
  }

  return (
    <AnimatePresence>
      <motion.div
        key={isLoginPanel ? 1 : 0}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.container}
      >
        <h1 className={styles.heading}>
          {isLoginPanel && (
            <>
              Welcome <p>Sign into your account!</p>
            </>
          )}

          {!isLoginPanel && (
            <>
              New to GetDone <p>Create your account!</p>
            </>
          )}
        </h1>

        <div className={styles.formContainer}>
          {isLoginPanel ? (
            <LoginForm />
          ) : (
            <RegisterForm onChangeToLoginPanel={handleChangeToLoginPanel} />
          )}
        </div>

        <button onClick={togglePanels} className={styles.cta}>
          {isLoginPanel
            ? "New to GetDone? Create account!"
            : "Already have account? Sign into your account"}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default AuthPanel;
