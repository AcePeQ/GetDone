import { useMutation } from "@tanstack/react-query";
import { deleteColumnApi } from "../../api/columnApi";

export type TDeleteColumnData = {
  boardId: string;
  columnId: string;
};

export function useDeleteColumn() {
  const { isPending, mutate: deleteColumn } = useMutation({
    mutationFn: (deleteColumnData: TDeleteColumnData) =>
      deleteColumnApi(deleteColumnData),
  });

  return { isPending, deleteColumn };
}
