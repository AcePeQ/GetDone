import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import InputRow from "../../../components/InputRow/InputRow";

import styles from "./AddColumnForm.module.css";
import Button from "../../../components/Button/Button";
import Select from "react-select";

const priorityOptions = [
  { value: 2, label: "High" },
  { value: 1, label: "Normal" },
  { value: 0, label: "Low" },
];

type TAddColumnInputs = {
  name: string;
  priority: number;
  color: string;
};

type TAddColumnProps = {
  onClose?: () => void;
};

function AddColumnForm({ onClose }: TAddColumnProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TAddColumnInputs>();

  const onSubmit: SubmitHandler<TAddColumnInputs> = (data) => {};

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputRow id="name" label="Name" error={errors.name?.message}>
        <input
          {...register("name", {
            required: "Name field is required",
          })}
          type="text"
          id="name"
          placeholder=" "
        />
      </InputRow>

      <InputRow id="priority" label="Priority" error={errors.priority?.message}>
        <Controller
          name="priority"
          control={control}
          rules={{ required: "Priority field is required" }}
          render={({ field }) => (
            <Select
              {...field}
              isClearable={false}
              isMulti={false}
              isSearchable={false}
              options={priorityOptions}
              defaultValue={priorityOptions[1]}
              placeholder=" "
              value={priorityOptions.find(
                (option) => option.value === field.value
              )}
              onChange={(selectedOption) =>
                field.onChange(selectedOption?.value)
              }
              id="priority"
            />
          )}
        />
      </InputRow>

      <InputRow id="color" label="Color" error={errors.color?.message}>
        <input
          {...register("color", {
            required: "Color field is required",
          })}
          type="color"
        />
      </InputRow>

      <div className={styles.buttons}>
        <Button type="submit" buttonStyle="primary" isDisabled={false}>
          Add column
        </Button>
        <Button
          type="button"
          onClick={onClose}
          buttonStyle="secondary"
          isDisabled={false}
        >
          Close
        </Button>
      </div>
    </form>
  );
}

export default AddColumnForm;
