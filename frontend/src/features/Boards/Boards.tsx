import { TablePropertiesIcon } from "lucide-react";
import styles from "./Boards.module.css";
import { useGetBoards } from "./useGetBoards";
import ButtonCreate from "../../components/ButtonCreate/ButtonCreate";
import AddBoardForm from "./AddBoardForm/AddBoardForm";

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
          <ButtonCreate
            modalTitle="Add New Board"
            buttonTitle="Create new board"
            buttonStyle="buttonNewBoard"
          >
            <AddBoardForm />
          </ButtonCreate>
        </li>
      </ul>
    </div>
  );
}

export default Boards;
