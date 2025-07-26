import { Plus } from "lucide-react";
import useModal from "../../hooks/useModal/useModal";
import Modal from "../Modal/Modal";

import styles from "./ButtonCreate.module.css";
import { cloneElement, type ReactElement } from "react";

type TButtonCreateProps = {
  modalTitle: string;
  buttonTitle: string;
  buttonStyle: string;
  children: ReactElement<{ onClose: () => void }>;
};

function ButtonCreate({
  modalTitle,
  buttonTitle,
  buttonStyle,
  children,
}: TButtonCreateProps) {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  const buttonCSS = buttonStyle;

  const childrenWithOnClose = cloneElement(children, {
    onClose: handleCloseModal,
  });

  return (
    <>
      <Modal onClose={handleCloseModal} isOpen={isModalOpen} title={modalTitle}>
        {childrenWithOnClose}
      </Modal>

      <button onClick={handleOpenModal} className={styles[buttonCSS]}>
        <Plus className={styles.icon} />
        {buttonTitle}
      </button>
    </>
  );
}

export default ButtonCreate;
