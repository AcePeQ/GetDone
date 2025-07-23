import { Plus, TablePropertiesIcon } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.logoWrapper}>
        <Logo size="medium" />
      </div>

      <div className={styles.boards}>
        <p className={styles.boards_heading}>All boards (3)</p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button}>
              <TablePropertiesIcon className={styles.icon} />
              Platform Lunch
            </button>
          </li>

          <li className={styles.item}>
            <button className={styles.button}>
              <TablePropertiesIcon className={styles.icon} />
              Platform Lunch
            </button>
          </li>

          <li>
            <button className={styles.buttonAdd}>
              <Plus className={styles.icon} />
              Create new board
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
