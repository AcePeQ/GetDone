import {
  Controller,
  useFieldArray,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import InputRow from "../../../components/InputRow/InputRow";

import styles from "./EditTaskForm.module.css";
import Select from "react-select";
import { useQueryClient } from "@tanstack/react-query";
import { useBoardsStore, type TTask } from "../../../stores/useBoardsStore";

import { toast } from "react-toastify";
import { useEditTask } from "../useEditTask";
import { useEffect } from "react";

type TEditTaskInputs = {
  status: string;
  subTasks: { _id: string; title: string; isDone: boolean }[];
};

type TEditTaskProps = {
  onClose?: () => void;
  selectedTask: TTask;
};

function EditTaskForm({ onClose, selectedTask }: TEditTaskProps) {
  const queryClient = useQueryClient();
  const { editTask } = useEditTask();
  const boardColumns = useBoardsStore((state) => state.selectedBoard?.columns);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<TEditTaskInputs>({
    defaultValues: {
      status: selectedTask.columnId,
      subTasks: selectedTask.subTasks,
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "subTasks",
  });

  useEffect(() => {
    const onSubmit: SubmitHandler<TEditTaskInputs> = (data) => {
      editTask({ subTasks: data.subTasks, columnId: data.status });
    };

    const subscription = watch(() => handleSubmit(onSubmit)());
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch, editTask]);

  const statusOptions = boardColumns?.map((column) => ({
    value: column._id,
    label: column.name,
  }));

  return (
    <>
      <p className={styles.description}>{selectedTask.description}</p>

      <form className={styles.form}>
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
                  </div>
                </InputRow>
              ))}
            </div>
          )}
        </div>
      </form>
    </>
  );
}

export default EditTaskForm;
