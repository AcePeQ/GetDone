import { Plus, TablePropertiesIcon } from "lucide-react";
import styles from "./Boards.module.css";

function Boards() {
  return (
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
  );
}

export default Boards;
