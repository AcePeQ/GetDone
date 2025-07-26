import type { TColumn } from "../../../stores/useBoardsStore";
import Task from "../Task/Task";
import styles from "./BoardColumn.module.css";

function BoardColumn({ column }: { column: TColumn }) {
  const tasksCount = column.tasks.length || 0;
  const tasksToDisplay = column.tasks || [];
  return (
    <article className={styles.column}>
      <h3>
        <span
          aria-disabled
          style={{ backgroundColor: column.color }}
          className={styles.dot}
        ></span>{" "}
        {column.name} ({tasksCount})
      </h3>

      <ul className={styles.tasks}>
        {tasksToDisplay.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </article>
  );
}

export default BoardColumn;
