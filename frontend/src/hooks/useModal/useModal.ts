import { useState } from "react";

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  return { isModalOpen, handleCloseModal, handleOpenModal };
}

export default useModal;
