import { TablePropertiesIcon } from "lucide-react";
import styles from "./Boards.module.css";
import { useGetBoards } from "./useGetBoards";
import ButtonCreate from "../../components/ButtonCreate/ButtonCreate";
import AddBoardForm from "./AddBoardForm/AddBoardForm";
import { useBoardsStore, type TBoard } from "../../stores/useBoardsStore";
import { useSidebarStore } from "../../stores/useSidebarStore";
import { useMediaQuery } from "react-responsive";
import Loader from "../../components/Loader/Loader";

import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

function Boards() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const { setBoard, selectedBoard } = useBoardsStore();
  const { isError, isPending, error, userBoards } = useGetBoards();
  const { toggleMenu } = useSidebarStore();

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return (
      <p className={styles.error}>
        Error: {error?.message || "Something went wrong"}
      </p>
    );
  }

  const boardsToDisplay = userBoards || [];
  const boardCount = boardsToDisplay.length;

  function handleCloseSideBarMenu() {
    toggleMenu(false);
  }

  return (
    <div className={styles.boards}>
      <p className={styles.boards_heading}>All boards ({boardCount})</p>

      <ul className={styles.list}>
        <AnimatePresence>
          {boardsToDisplay.map((board: TBoard) => (
            <motion.li
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={board._id}
              className={styles.item}
            >
              <button
                onClick={() => {
                  setBoard(board);

                  if (isTabletOrMobile) {
                    handleCloseSideBarMenu();
                  }
                }}
                className={`${styles.button} ${
                  board._id === selectedBoard?._id ? styles.active : ""
                }`}
              >
                <TablePropertiesIcon className={styles.icon} />
                {board.name}
              </button>
            </motion.li>
          ))}

          <motion.li layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ButtonCreate
              modalTitle="Add New Board"
              buttonTitle="Create new board"
              buttonStyle="buttonNewBoard"
            >
              <AddBoardForm />
            </ButtonCreate>
          </motion.li>
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default Boards;
