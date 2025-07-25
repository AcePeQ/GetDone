import { create } from "zustand";

export type TBoard = {
  id: string;
  name: string;
  user: string;
  columns: TColumn[] | [];
};

export type TColumn = {
  _id: string;
  boardId: string;
  name: string;
  position: number;
  color: string;
  tasks: TTask[] | [];
};

export type TTask = {
  _id: string;
  columnId: string;
  title: string;
  description: string;
  priority: number;
  subTasks: TSubTask[] | [];
};

export type TSubTask = {
  _id: string;
  title: string;
  isDone: boolean;
};

type BoardsState = {
  boards: TBoard[] | [];
  selectedBoard: TBoard | null;

  setBoards: (boards: TBoard[]) => void;
};

export const useBoardsStore = create<BoardsState>((set) => ({
  boards: [],
  selectedBoard: null,

  setBoards: (boards) => {
    set({ boards });
  },
}));
