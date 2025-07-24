import { useForm, type SubmitHandler } from "react-hook-form";
import InputRow from "../../../components/InputRow/InputRow";

import styles from "./AddBoardForm.module.css";
import Button from "../../../components/Button/Button";

type TAddNewBoardInputs = {
  name: string;
};

type TBoardFormProps = {
  onClose: () => void;
};

function AddBoardForm({ onClose }: TBoardFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAddNewBoardInputs>();

  const onSubmit: SubmitHandler<TAddNewBoardInputs> = (data) => {
    console.log(data);
    reset();
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
        <Button type="submit" buttonStyle="primary">
          Add board
        </Button>
        <Button type="button" onClick={onClose} buttonStyle="secondary">
          Close
        </Button>
      </div>
    </form>
  );
}

export default AddBoardForm;
