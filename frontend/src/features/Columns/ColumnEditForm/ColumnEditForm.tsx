import { useQueryClient } from "@tanstack/react-query";
import styles from "./ColumnEditForm.module.css";
import { useBoardsStore, type TColumn } from "../../../stores/useBoardsStore";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import InputRow from "../../../components/InputRow/InputRow";
import Select from "react-select";
import Button from "../../../components/Button/Button";
import { toast } from "react-toastify";
import { useEditColumn } from "../useEditColumn";

const priorityOptions = [
  { value: 2, label: "High" },
  { value: 1, label: "Normal" },
  { value: 0, label: "Low" },
];

type TEditColumnInputs = {
  name: string;
  priority: number;
  color: string;
};

type TEditColumnProps = {
  onClose?: () => void;
  column: TColumn;
};

function ColumnEditForm({ onClose, column }: TEditColumnProps) {
  const { isPending, editColumn } = useEditColumn();
  const queryClient = useQueryClient();
  const boardId = useBoardsStore((state) => state.selectedBoard?._id);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TEditColumnInputs>({
    defaultValues: {
      priority: column.position,
      name: column.name,
      color: column.color,
    },
  });

  const onSubmit: SubmitHandler<TEditColumnInputs> = (data) => {
    if (!boardId) return;

    editColumn(
      { boardId, columnId: column._id, ...data },
      {
        onSuccess: (data) => {
          onClose?.();
          queryClient.invalidateQueries({ queryKey: ["userBoards"] });
          toast.success(data.message);
        },
        onError: (error) => {
          toast.error(error.message);
          reset();
        },
      }
    );
  };

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
              classNamePrefix="react-select"
              inputId="priority"
              isClearable={false}
              isMulti={false}
              isSearchable={false}
              options={priorityOptions}
              placeholder=" "
              value={
                priorityOptions.find(
                  (option) => option.value === field.value
                ) || null
              }
              className={`react-select-container ${
                field.value ? "has-value" : ""
              }`}
              onChange={(selectedOption) =>
                field.onChange(selectedOption?.value)
              }
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
        <Button type="submit" buttonStyle="primary" isDisabled={isPending}>
          Edit
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

export default ColumnEditForm;
