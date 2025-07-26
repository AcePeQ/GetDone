import { useMutation } from "@tanstack/react-query";
import { createColumnApi } from "../../api/columnApi";

export type TCreateColumnData = {
  boardId: string;
  color: string;
  priority: number;
  name: string;
};

export function useCreateColumn() {
  const { isPending, mutate: createColumn } = useMutation({
    mutationFn: (createColumnData: TCreateColumnData) =>
      createColumnApi(createColumnData),
  });

  return { isPending, createColumn };
}
