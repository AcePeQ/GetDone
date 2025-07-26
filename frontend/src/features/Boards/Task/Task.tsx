import type { TTask } from "../../../stores/useBoardsStore";
import styles from "./Task.module.css";

function Task({ task }: { task: TTask }) {
  return (
    <li className={styles.task_item}>
      <button className={styles.task_button}>
        <span>QA and test all major user journeys and to othger shit ab</span>
        <span className={styles.tasksCount}>0 of 2 subtasks</span>
      </button>
    </li>
  );
}

export default Task;
