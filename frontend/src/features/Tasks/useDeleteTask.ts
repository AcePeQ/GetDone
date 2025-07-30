import { useMutation } from "@tanstack/react-query";
import { deleteTaskApi } from "../../api/taskApi";

export type TDeleteTaskData = {
  taskId: string;
};

export function useDeleteTask() {
  const { isPending, mutate: deleteTask } = useMutation({
    mutationFn: (deleteTaskData: TDeleteTaskData) =>
      deleteTaskApi(deleteTaskData),
  });

  return { isPending, deleteTask };
}
