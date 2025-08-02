import ButtonCreate from "../../../components/ButtonCreate/ButtonCreate";
import { useBoardsStore } from "../../../stores/useBoardsStore";
import AddColumnForm from "../../Columns/AddColumnForm/AddColumnForm";
import BoardColumn from "../BoardColumn/BoardColumn";
import styles from "./Board.module.css";

import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

function Board() {
  const { selectedBoard } = useBoardsStore();

  if (!selectedBoard) {
    return (
      <div className={styles.boardEmpty}>
        <p className={styles.emptyBoard}>Select the board</p>
      </div>
    );
  }

  const columnsToDisplay =
    selectedBoard?.columns.sort((a, b) => b.position - a.position) || [];

  return (
    <div key={selectedBoard._id} className={styles.board}>
      <AnimatePresence>
        {columnsToDisplay.map((column) => (
          <BoardColumn key={column._id} column={column} />
        ))}

        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ height: "100%" }}
        >
          <ButtonCreate
            modalTitle="New Column"
            buttonTitle="Add New Column"
            buttonStyle="buttonNewColumn"
          >
            <AddColumnForm />
          </ButtonCreate>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Board;
