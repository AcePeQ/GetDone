import ButtonCreate from "../../../components/ButtonCreate/ButtonCreate";
import { useBoardsStore } from "../../../stores/useBoardsStore";
import BoardColumn from "../BoardColumn/BoardColumn";
import styles from "./Board.module.css";

function Board() {
  const { selectedBoard } = useBoardsStore();

  const columnsToDisplay = selectedBoard?.columns || [];
  return (
    <div className={styles.board}>
      {columnsToDisplay.map((column) => (
        <BoardColumn key={column._id} column={column} />
      ))}

      <ButtonCreate
        modalTitle="Add New Column"
        buttonTitle="Add new column"
        buttonStyle="buttonNewColumn"
      >
        <div></div>
      </ButtonCreate>
    </div>
  );
}

export default Board;
