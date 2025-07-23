import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.css";
import Boards from "../../features/Boards/Boards";

function Sidebar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.logoWrapper}>
        <Logo size="medium" />

        <Boards />
      </div>
    </aside>
  );
}

export default Sidebar;
