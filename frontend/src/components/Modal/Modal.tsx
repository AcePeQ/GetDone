import { X } from "lucide-react";
import styles from "./Modal.module.css";
import { useEffect, useRef, type ReactElement } from "react";
import { createPortal } from "react-dom";

type TModalProps = {
  title: string;
  isOpen: boolean;
  children: ReactElement;
  onClose: () => void;
};

function Modal({ title, isOpen, onClose, children }: TModalProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    function handleClickBackdrop(e: MouseEvent) {
      if (e.target === e.currentTarget) {
        onCloseRef.current();
      }
    }

    if (isOpen) {
      dialog.current?.showModal();
      dialog.current?.addEventListener("click", handleClickBackdrop);
    } else {
      dialog.current?.close();
      dialog.current?.removeEventListener("click", handleClickBackdrop);
    }
  }, [isOpen]);

  return createPortal(
    <dialog ref={dialog} className={styles.modal} onClose={onClose}>
      <div className={styles.modalContainer}>
        <button className={styles.btnClose} onClick={onClose}>
          <X />
        </button>
        <h1 className={styles.title}>{title}</h1>

        {isOpen ? children : null}
      </div>
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
}

export default Modal;
