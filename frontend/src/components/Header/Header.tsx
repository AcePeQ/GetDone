import { useUserStore } from "../../stores/useUserStore";

import styles from "./Header.module.css";
import ButtonLogout from "../ButtonLogout/ButtonLogout";
import AddTaskButton from "../../features/Tasks/AddTaskButton/AddTaskButton";
import { useBoardsStore } from "../../stores/useBoardsStore";
import Button from "../Button/Button";
import { MenuSquare } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { useSidebarStore } from "../../stores/useSidebarStore";

function Header() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 750px)" });

  const username = useUserStore((state) => state.user?.username);
  const activeBoardName = useBoardsStore((state) => state.selectedBoard?.name);

  const { toggleMenu } = useSidebarStore();

  return (
    <header className={styles.header}>
      <div className={styles.greeting}>
        <h1>Hi, {username}</h1>
        <h2>{activeBoardName}</h2>
      </div>

      <div className={styles.options}>
        {isTabletOrMobile && (
          <Button onClick={() => toggleMenu(true)}>
            <MenuSquare />
          </Button>
        )}
        <AddTaskButton />
        <ButtonLogout />
      </div>
    </header>
  );
}

export default Header;
