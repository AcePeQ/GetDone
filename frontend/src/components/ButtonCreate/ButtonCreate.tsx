import { Plus } from "lucide-react";
import useModal from "../../hooks/useModal/useModal";
import Modal from "../Modal/Modal";

import styles from "./ButtonCreate.module.css";
import { cloneElement, type ReactElement } from "react";

type TButtonCreateProps = {
  modalTitle: string;
  buttonTitle?: string;
  buttonStyle: string;
  children: ReactElement;
  isIcon?: boolean;
};

function ButtonCreate({
  modalTitle,
  buttonTitle,
  buttonStyle,
  children,
  isIcon = true,
}: TButtonCreateProps) {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();

  const buttonCSS = buttonStyle;

  const childrenWithOnClose = cloneElement(
    children as ReactElement<{ onClose: () => void }>,
    {
      onClose: handleCloseModal,
    }
  );

  return (
    <>
      <Modal onClose={handleCloseModal} isOpen={isModalOpen} title={modalTitle}>
        {childrenWithOnClose}
      </Modal>

      <button onClick={handleOpenModal} className={styles[buttonCSS]}>
        {isIcon ? <Plus className={styles.icon} /> : null}
        {buttonTitle || <p className="sr-only">{buttonTitle}</p>}
      </button>
    </>
  );
}

export default ButtonCreate;
