import styles from "./Logo.module.css";

import getDoneLogo from "../../assets/images/logo/logo.svg";

function Logo({ size }: { size?: string }) {
  return (
    <img
      className={`${styles.logo} ${styles[size ? size : ""]}`}
      src={getDoneLogo}
      alt="logo of GetDone company"
    />
  );
}

export default Logo;
