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

import Button from "../../../components/Button/Button";

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
  const { editTask, isPending } = useEditTask();
  const boardColumns = useBoardsStore((state) => state.selectedBoard?.columns);

  const {
    handleSubmit,
    control,
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

  const onSubmit: SubmitHandler<TEditTaskInputs> = (data) => {
    console.log(data);

    editTask(
      {
        taskId: selectedTask._id,
        subTasks: data.subTasks,
        columnId: data.status,
      },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: ["userBoards"] });
          toast.success(data.message);
          onClose?.();
        },
        onError: (error) => toast.error(error.message),
      }
    );
  };

  const statusOptions = boardColumns?.map((column) => ({
    value: column._id,
    label: column.name,
  }));

  return (
    <>
      <p className={styles.description}>{selectedTask.description}</p>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                onChange={(selectedOption) => {
                  field.onChange(selectedOption?.value);
                }}
              />
            )}
          />
        </InputRow>

        <div className={styles.subTasksWrapper}>
          <p className={styles.label}>Subtasks</p>

          {fields.length > 0 && (
            <div className={styles.fields}>
              {fields.map((field, index) => {
                return (
                  <InputRow
                    key={field.id}
                    error={errors.subTasks?.[index]?.title?.message}
                  >
                    <div className={styles.subTaskRow}>
                      <Controller
                        name={`subTasks.${index}.isDone`}
                        control={control}
                        render={({ field: checkboxField }) => (
                          <input
                            type="checkbox"
                            id={`subTasks.${index}.isDone`}
                            className={styles.subTaskInput}
                            checked={checkboxField.value || false}
                            onChange={(e) => {
                              checkboxField.onChange(e.target.checked);
                            }}
                          />
                        )}
                      />
                      <label htmlFor={`subTasks.${index}.isDone`}>
                        {field.title}
                      </label>
                    </div>
                  </InputRow>
                );
              })}
            </div>
          )}
        </div>

        <div className={styles.buttons}>
          <Button type="submit" buttonStyle="primary" isDisabled={isPending}>
            Save
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
    </>
  );
}

export default EditTaskForm;
