import { Plus } from "lucide-react";
import styles from "./ButtonCreateNewBoard.module.css";
import Modal from "../Modal/Modal";
import AddBoardForm from "../../features/Boards/AddBoardForm/AddBoardForm";
import { useState } from "react";

function ButtonCreateNewBoard() {
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
        title="Add New Board"
      >
        <AddBoardForm onClose={handleCloseModal} />
      </Modal>

      <button onClick={handleOpenModal} className={styles.buttonAdd}>
        <Plus className={styles.icon} />
        Create new board
      </button>
    </>
  );
}

export default ButtonCreateNewBoard;
