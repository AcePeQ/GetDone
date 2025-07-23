import Board from "../../features/Boards/Board/Board";

import styles from "./AppPage.module.css";

function AppPage() {
  return (
    <div className={styles.app}>
      <Board />
    </div>
  );
}

export default AppPage;
