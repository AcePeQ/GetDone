import { useQuery } from "@tanstack/react-query";
import { getBoardsApi } from "../../api/boardApi";
import { useEffect } from "react";
import { useBoardsStore } from "../../stores/useBoardsStore";

export function useGetBoards() {
  const setBoards = useBoardsStore((state) => state.setBoards);

  const {
    isPending,
    isError,
    error,
    data: userBoards,
  } = useQuery({
    queryKey: ["userBoards"],
    queryFn: getBoardsApi,
  });

  useEffect(() => {
    if (userBoards) {
      setBoards(userBoards);
    }
  }, [userBoards, setBoards]);

  return { isError, isPending, error, userBoards };
}
