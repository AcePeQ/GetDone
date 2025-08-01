import Modal from "../../../components/Modal/Modal";
import useModal from "../../../hooks/useModal/useModal";
import type { TTask } from "../../../stores/useBoardsStore";
import EditTaskForm from "../../Tasks/EditTaskForm/EditTaskForm";

import { motion } from "motion/react";

import styles from "./Task.module.css";

function Task({ task }: { task: TTask }) {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  const countTasks = task.subTasks.length || 0;
  const doneTasks = task.subTasks.reduce((acc, value) => {
    if (value.isDone) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return (
    <motion.li
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.task_item}
    >
      <button onClick={handleOpenModal} className={styles.task_button}>
        <span>{task.title}</span>
        <span className={styles.tasksCount}>
          {doneTasks} of {countTasks} subtasks
        </span>
      </button>

      <Modal onClose={handleCloseModal} isOpen={isModalOpen} title={task.title}>
        <EditTaskForm onClose={handleCloseModal} selectedTask={task} />
      </Modal>
    </motion.li>
  );
}

export default Task;
