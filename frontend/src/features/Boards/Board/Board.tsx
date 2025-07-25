import ButtonCreateNewColumn from "../../../components/ButtonCreateNewColumn/ButtonCreateNewColumn";
import BoardColumn from "../BoardColumn/BoardColumn";
import styles from "./Board.module.css";

function Board() {
  return (
    <div className={styles.board}>
      <BoardColumn />

      <ButtonCreateNewColumn />
    </div>
  );
}

export default Board;
