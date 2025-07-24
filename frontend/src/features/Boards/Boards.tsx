import { TablePropertiesIcon } from "lucide-react";
import styles from "./Boards.module.css";
import ButtonCreateNewBoard from "../../components/ButtonCreateNewBoard/ButtonCreateNewBoard";

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
          <ButtonCreateNewBoard />
        </li>
      </ul>
    </div>
  );
}

export default Boards;
