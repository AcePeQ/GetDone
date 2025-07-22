import {
  cloneElement,
  useState,
  type InputHTMLAttributes,
  type ReactElement,
} from "react";
import styles from "./InputRow.module.css";
import { Eye, EyeOff } from "lucide-react";

type InputRowProps = {
  error?: string;
  id: string;
  label: string;
  children: ReactElement<InputHTMLAttributes<HTMLInputElement>>;
};

function InputRow({ error, id, label, children }: InputRowProps) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  const childrenInput =
    id === "password"
      ? cloneElement(children, {
          type: showPassword ? "text" : "password",
        })
      : children;

  return (
    <div className={styles.row}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        {id === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Show password" : "Hide password"}
            className={styles.passwordButton}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        )}
        {childrenInput}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default InputRow;
