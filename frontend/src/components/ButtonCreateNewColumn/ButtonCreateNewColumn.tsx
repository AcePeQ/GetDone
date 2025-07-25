import { useState } from "react";
import Modal from "../Modal/Modal";

import styles from "./ButtonCreateNewColumn.module.css";
import { Plus } from "lucide-react";

function ButtonCreateNewColumn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Modal
        onClose={handleCloseModal}
        isOpen={isModalOpen}
        title="Add New Column"
      >
        <div>All</div>
      </Modal>

      <button onClick={handleOpenModal} className={styles.buttonAdd}>
        <Plus className={styles.icon} />
        Create new column
      </button>
    </>
  );
}

export default ButtonCreateNewColumn;
