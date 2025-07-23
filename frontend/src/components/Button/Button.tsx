import type { ReactElement } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: string | ReactElement;
  buttonStyle?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  onClick?: () => void;
};

function Button({
  children,
  buttonStyle = "primary",
  type = "button",
  isDisabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${styles[buttonStyle]}`}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
