import type { ReactElement } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: string | ReactElement;
  buttonStyle?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
};

function Button({
  children,
  buttonStyle = "primary",
  type = "button",
  isDisabled,
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${styles[buttonStyle]}`}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
