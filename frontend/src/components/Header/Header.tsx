import { useUserStore } from "../../stores/useUserStore";

import styles from "./Header.module.css";
import ButtonLogout from "../ButtonLogout/ButtonLogout";
import AddTaskButton from "../../features/Tasks/AddTaskButton/AddTaskButton";

function Header() {
  const username = useUserStore((state) => state.user?.username);

  return (
    <header className={styles.header}>
      <div className={styles.greeting}>
        <h1>Hi, {username}</h1>
        <h2>Platform Lunch</h2>
      </div>

      <div className={styles.options}>
        <AddTaskButton />
        <ButtonLogout />
      </div>
    </header>
  );
}

export default Header;
