import { useForm, type SubmitHandler } from "react-hook-form";
import InputRow from "../../../components/InputRow/InputRow";

import styles from "./AddBoardForm.module.css";
import Button from "../../../components/Button/Button";
import { useCreateBoard } from "../useCreateBoard";
import { toast } from "react-toastify";

type TAddNewBoardInputs = {
  name: string;
};

type TBoardFormProps = {
  onClose?: () => void;
};

function AddBoardForm({ onClose }: TBoardFormProps) {
  const { isPending, createBoard } = useCreateBoard();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAddNewBoardInputs>();

  const onSubmit: SubmitHandler<TAddNewBoardInputs> = (data) => {
    createBoard(data, {
      onSuccess: (data) => {
        toast.success(data.message);
        onClose?.();
      },
      onError: (error) => {
        toast.error(error.message);
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputRow id="name" label="Board name" error={errors.name?.message}>
        <input
          {...register("name", {
            required: "Board name field is required",
          })}
          type="text"
          id="name"
          placeholder=" "
        />
      </InputRow>

      <div className={styles.buttons}>
        <Button type="submit" buttonStyle="primary" isDisabled={isPending}>
          Add board
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

export default AddBoardForm;
