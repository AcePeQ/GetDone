import Modal from "../../../components/Modal/Modal";
import useModal from "../../../hooks/useModal/useModal";
import type { TTask } from "../../../stores/useBoardsStore";
import EditTaskForm from "../../Tasks/EditTaskForm/EditTaskForm";
import styles from "./Task.module.css";

function Task({ task }: { task: TTask }) {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  const countTasks = task.subTasks.length || 0;

  return (
    <li className={styles.task_item}>
      <button onClick={handleOpenModal} className={styles.task_button}>
        <span>{task.title}</span>
        <span className={styles.tasksCount}>0 of {countTasks} subtasks</span>
      </button>

      <Modal onClose={handleCloseModal} isOpen={isModalOpen} title={task.title}>
        <EditTaskForm onClose={handleCloseModal} selectedTask={task} />
      </Modal>
    </li>
  );
}

export default Task;
