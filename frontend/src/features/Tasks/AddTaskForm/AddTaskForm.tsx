import {
  Controller,
  useFieldArray,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import InputRow from "../../../components/InputRow/InputRow";

import styles from "./AddTaskForm.module.css";
import Button from "../../../components/Button/Button";
import Select from "react-select";
import { useQueryClient } from "@tanstack/react-query";
import { useBoardsStore } from "../../../stores/useBoardsStore";
import { X } from "lucide-react";
import { useAddTask } from "../useAddTask";
import { toast } from "react-toastify";

const priorityOptions = [
  { value: 2, label: "High" },
  { value: 1, label: "Normal" },
  { value: 0, label: "Low" },
];

type TAddTaskInputs = {
  title: string;
  description: string;
  priority: number;
  status: string;
  subTasks: { title: string }[];
};

type TAddTaskProps = {
  onClose?: () => void;
};

function AddTaskForm({ onClose }: TAddTaskProps) {
  const queryClient = useQueryClient();
  const { addTask, isPending } = useAddTask();
  const boardColumns = useBoardsStore((state) => state.selectedBoard?.columns);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TAddTaskInputs>({
    defaultValues: {
      priority: 1,
      subTasks: [{ title: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subTasks",
  });

  function handleAddSubtask() {
    append({ title: "" });
  }

  function handleRemoveSubtask(index: number) {
    remove(index);
  }

  const onSubmit: SubmitHandler<TAddTaskInputs> = (data) => {
    addTask(
      {
        columnId: data.status,
        title: data.title,
        description: data.description,
        subTasks: data.subTasks,
        priority: data.priority,
      },
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

  const statusOptions = boardColumns?.map((column) => ({
    value: column._id,
    label: column.name,
  }));

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputRow id="title" label="Title" error={errors.title?.message}>
        <input
          {...register("title", {
            required: "Title field is required",
          })}
          type="text"
          id="title"
          placeholder=" "
        />
      </InputRow>

      <InputRow
        id="description"
        label="Description"
        error={errors.description?.message}
      >
        <textarea
          {...register("description", {
            required: "Description field is required",
          })}
          id="description"
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
              value={priorityOptions.find(
                (option) => option.value === field.value
              )}
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

      <InputRow id="status" label="Status" error={errors.status?.message}>
        <Controller
          name="status"
          control={control}
          rules={{ required: "Status field is required" }}
          render={({ field }) => (
            <Select
              {...field}
              classNamePrefix="react-select"
              inputId="status"
              isClearable={false}
              isMulti={false}
              isSearchable={false}
              options={statusOptions}
              placeholder=" "
              value={statusOptions?.find(
                (option) => option.value === field.value
              )}
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

      <div className={styles.subTasksWrapper}>
        <p className={styles.label}>Subtasks</p>

        {fields.length > 0 && (
          <div className={styles.fields}>
            {fields.map((field, index) => (
              <InputRow
                key={field.id}
                error={errors.subTasks?.[index]?.title?.message}
              >
                <div className={styles.subTaskRow}>
                  <input
                    {...register(`subTasks.${index}.title`, {
                      required: "Subtask is required",
                    })}
                    type="text"
                    id={`subTasks.${index}.title`}
                    placeholder=" "
                  />

                  <button
                    type="button"
                    onClick={() => handleRemoveSubtask(index)}
                    className={styles.buttonRemoveSub}
                  >
                    <X />
                  </button>
                </div>
              </InputRow>
            ))}
          </div>
        )}

        <Button type="button" onClick={handleAddSubtask}>
          Add subtask
        </Button>
      </div>

      <div className={styles.buttons}>
        <Button type="submit" buttonStyle="primary" isDisabled={isPending}>
          Add
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

export default AddTaskForm;
