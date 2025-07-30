import styles from "./ColumnDeleteForm.module.css";

import { useQueryClient } from "@tanstack/react-query";
import { useForm, type EmptyObject, type SubmitHandler } from "react-hook-form";
import Button from "../../../components/Button/Button";
import { useDeleteColumn } from "../useDeleteColumn";
import { toast } from "react-toastify";
import { useBoardsStore } from "../../../stores/useBoardsStore";

type TAddColumnProps = {
  onClose?: () => void;
  columnId: string;
};

function ColumnDeleteForm({ onClose, columnId }: TAddColumnProps) {
  const { isPending, deleteColumn } = useDeleteColumn();
  const queryClient = useQueryClient();

  const boardId = useBoardsStore((state) => state.selectedBoard?._id);

  const { handleSubmit } = useForm<EmptyObject>();

  const onSubmit: SubmitHandler<EmptyObject> = () => {
    if (!boardId) return;

    deleteColumn(
      { columnId, boardId },
      {
        onSuccess: (data) => {
          onClose?.();

          queryClient.invalidateQueries({ queryKey: ["userBoards"] });
          toast.success(data.message);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <p>Are you sure you want to delete the column?</p>

      <div className={styles.buttons}>
        <Button type="submit" buttonStyle="primary" isDisabled={isPending}>
          Delete
        </Button>
        <Button
          type="button"
          onClick={onClose}
          buttonStyle="secondary"
          isDisabled={isPending}
        >
          Close
        </Button>
      </div>
    </form>
  );
}

export default ColumnDeleteForm;
