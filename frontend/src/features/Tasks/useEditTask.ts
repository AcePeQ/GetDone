import { useMutation } from "@tanstack/react-query";
import { createTaskApi } from "../../api/taskApi";

export type TEditTaskData = {
  columnId: string;
  title: string;
  description: string;
  priority: number;
  subTasks: { title: string; isDone: boolean }[];
};

export function useEditTask() {
  const { isPending, mutate: editTask } = useMutation({
    mutationFn: (editTaskData: TEditTaskData) => createTaskApi(editTaskData),
  });

  return { isPending, editTask };
}
