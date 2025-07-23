import BoardColumn from "../BoardColumn/BoardColumn";
import styles from "./Board.module.css";

function Board() {
  return (
    <div className={styles.board}>
      <BoardColumn />
    </div>
  );
}

export default Board;
