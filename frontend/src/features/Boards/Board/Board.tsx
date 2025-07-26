import ButtonCreate from "../../../components/ButtonCreate/ButtonCreate";
import BoardColumn from "../BoardColumn/BoardColumn";
import styles from "./Board.module.css";

function Board() {
  return (
    <div className={styles.board}>
      <BoardColumn />

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
