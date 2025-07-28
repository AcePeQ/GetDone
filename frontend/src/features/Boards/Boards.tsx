import { TablePropertiesIcon } from "lucide-react";
import styles from "./Boards.module.css";
import { useGetBoards } from "./useGetBoards";
import ButtonCreate from "../../components/ButtonCreate/ButtonCreate";
import AddBoardForm from "./AddBoardForm/AddBoardForm";
import { useBoardsStore, type TBoard } from "../../stores/useBoardsStore";
import { useEffect } from "react";

function Boards() {
  const { boards, setBoards, setBoard, selectedBoard } = useBoardsStore();
  const { isError, isPending, error, userBoards } = useGetBoards();

  useEffect(() => {
    if (userBoards) {
      setBoards(userBoards);
    }
  }, [userBoards, setBoards]);

  if (isPending) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error: {error?.message || "Something went wrong"}</p>;
  }

  const boardCount = boards?.length || 0;
  const boardsToDisplay = boards && boards.length > 0 ? boards : [];

  return (
    <div className={styles.boards}>
      <p className={styles.boards_heading}>All boards ({boardCount})</p>

      <ul className={styles.list}>
        {boardsToDisplay.map((board: TBoard) => (
          <li key={board._id} className={styles.item}>
            <button
              onClick={() => setBoard(board)}
              className={`${styles.button} ${
                board._id === selectedBoard?._id ? styles.active : ""
              }`}
            >
              <TablePropertiesIcon className={styles.icon} />
              {board.name}
            </button>
          </li>
        ))}

        <li>
          <ButtonCreate
            modalTitle="Add New Board"
            buttonTitle="Create new board"
            buttonStyle="buttonNewBoard"
          >
            <AddBoardForm />
          </ButtonCreate>
        </li>
      </ul>
    </div>
  );
}

export default Boards;
