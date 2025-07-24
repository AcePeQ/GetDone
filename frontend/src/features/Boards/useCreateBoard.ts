import { useMutation } from "@tanstack/react-query";
import { createBoardApi } from "../../api/boardApi";

export type TCreateBoardData = {
  name: string;
};

export function useCreateBoard() {
  const { isPending, mutate: createBoard } = useMutation({
    mutationFn: (createBoardData: TCreateBoardData) =>
      createBoardApi(createBoardData),
  });

  return { isPending, createBoard };
}
