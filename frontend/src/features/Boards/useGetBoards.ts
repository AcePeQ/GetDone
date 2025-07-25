import { useQuery } from "@tanstack/react-query";
import { getBoardsApi } from "../../api/boardApi";

export function useGetBoards() {
  const {
    isPending,
    isError,
    error,
    data: userBoards,
  } = useQuery({
    queryKey: ["userBoards"],
    queryFn: getBoardsApi,
  });

  return { isError, isPending, error, userBoards };
}
