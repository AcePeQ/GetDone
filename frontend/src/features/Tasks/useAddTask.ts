import { useMutation } from "@tanstack/react-query";
import { createTaskApi } from "../../api/taskApi";

export type TAddTaskData = {
  columnId: string;
  title: string;
  description: string;
  priority: number;
  subTasks: { title: string }[];
};

export function useAddTask() {
  const { isPending, mutate: addTask } = useMutation({
    mutationFn: (addTaskData: TAddTaskData) => createTaskApi(addTaskData),
  });

  return { isPending, addTask };
}
