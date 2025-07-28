import { useMutation } from "@tanstack/react-query";
import { editColumnApi } from "../../api/columnApi";

export type TEditColumnData = {
  boardId: string;
  columnId: string;
  color: string;
  priority: number;
  name: string;
};

export function useEditColumn() {
  const { isPending, mutate: editColumn } = useMutation({
    mutationFn: (editColumnData: TEditColumnData) =>
      editColumnApi(editColumnData),
  });

  return { isPending, editColumn };
}
