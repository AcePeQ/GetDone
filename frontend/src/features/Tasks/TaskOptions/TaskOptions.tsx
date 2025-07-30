import { EllipsisVertical } from "lucide-react";

import styles from "./TaskOptions.module.css";
import type { TTask } from "../../../stores/useBoardsStore";
import { useDeleteTask } from "../useDeleteTask";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

function TaskOptions({
  selectedTask,
  onClose,
}: {
  selectedTask: TTask;
  onClose?: () => void;
}) {
  const queryClient = useQueryClient();
  const { isPending, deleteTask } = useDeleteTask();

  function handleDeleteTask() {
    deleteTask(
      { taskId: selectedTask._id },
      {
        onSuccess: (data) => {
          toast.success(data.messege);
          queryClient.invalidateQueries({ queryKey: ["userBoards"] });
          onClose?.();
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
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
