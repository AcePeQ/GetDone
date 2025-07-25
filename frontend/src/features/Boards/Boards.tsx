import { TablePropertiesIcon } from "lucide-react";
import styles from "./Boards.module.css";
import ButtonCreateNewBoard from "../../components/ButtonCreateNewBoard/ButtonCreateNewBoard";
import { useGetBoards } from "./useGetBoards";

function Boards() {
  const { isError, isPending, error, userBoards } = useGetBoards();

  if (isPending) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  console.log(userBoards);

  return (
    <div className={styles.boards}>
      <p className={styles.boards_heading}>All boards ({userBoards.length})</p>

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
