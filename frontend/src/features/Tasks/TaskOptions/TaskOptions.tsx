import { EllipsisVertical } from "lucide-react";

import styles from "./TaskOptions.module.css";
import type { TTask } from "../../../stores/useBoardsStore";
import { useDeleteTask } from "../useDeleteTask";

function TaskOptions({ selectedTask }: { selectedTask: TTask }) {
  const { isPending, deleteTask } = useDeleteTask();

  function handleDeleteTask() {
    deleteTask({ taskId: selectedTask._id, columnId: selectedTask.columnId });
  }

  return (
    <div tabIndex={0} className={styles.options} aria-label="column options">
      <EllipsisVertical aria-disabled />

      <ul className={styles.menu}>
        <li>
          <button
            disabled={isPending}
            onClick={handleDeleteTask}
            className={styles.buttonDelete}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

export default TaskOptions;
