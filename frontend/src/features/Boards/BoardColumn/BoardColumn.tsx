import type { TColumn } from "../../../stores/useBoardsStore";
import Task from "../Task/Task";
import styles from "./BoardColumn.module.css";
import ColumnOptions from "../../Columns/ColumnOptions/ColumnOptions";

import { motion } from "motion/react";

function BoardColumn({ column }: { column: TColumn }) {
  const tasksCount = column.tasks?.length || 0;
  const tasksToDisplay =
    column.tasks?.sort((a, b) => b.priority - a.priority) || [];
  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.column}
    >
      <div className={styles.column_header}>
        <h3>
          <span
            aria-disabled
            style={{ backgroundColor: column.color }}
            className={styles.dot}
          ></span>{" "}
          {column.name} ({tasksCount})
        </h3>

        <ColumnOptions column={column} />
      </div>

      {tasksCount === 0 && <p className={styles.tasksInfo}>No asigned tasks</p>}

      <ul className={styles.tasks}>
        {tasksToDisplay.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </motion.article>
  );
}

export default BoardColumn;
