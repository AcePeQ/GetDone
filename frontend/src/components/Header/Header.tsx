import { useUserStore } from "../../stores/useUserStore";

import styles from "./Header.module.css";
import ButtonLogout from "../ButtonLogout/ButtonLogout";
import AddTaskButton from "../../features/Tasks/AddTaskButton/AddTaskButton";
import { useBoardsStore } from "../../stores/useBoardsStore";

function Header() {
  const username = useUserStore((state) => state.user?.username);
  const activeBoardName = useBoardsStore((state) => state.selectedBoard?.name);

  return (
    <header className={styles.header}>
      <div className={styles.greeting}>
        <h1>Hi, {username}</h1>
        <h2>{activeBoardName}</h2>
      </div>

      <div className={styles.options}>
        <AddTaskButton />
        <ButtonLogout />
      </div>
    </header>
  );
}

export default Header;
