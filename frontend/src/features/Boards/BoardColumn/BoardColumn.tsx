import Task from "../Task/Task";
import styles from "./BoardColumn.module.css";

function BoardColumn() {
  return (
    <article className={styles.column}>
      <h3>
        <span aria-disabled className={styles.dot}></span> Todo (4)
      </h3>

      <ul className={styles.tasks}>
        <Task />
      </ul>
    </article>
  );
}

export default BoardColumn;
