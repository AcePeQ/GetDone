import { useMutation } from "@tanstack/react-query";
import { editTaskApi } from "../../api/taskApi";

export type TEditTaskData = {
  taskId: string;
  columnId: string;
  subTasks: { _id: string; title: string; isDone: boolean }[];
};

export function useEditTask() {
  const { isPending, mutate: editTask } = useMutation({
    mutationFn: (editTaskData: TEditTaskData) => editTaskApi(editTaskData),
  });

  return { isPending, editTask };
}
