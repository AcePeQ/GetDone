import { LogOut, Plus } from "lucide-react";
import { useUserStore } from "../../stores/useUserStore";
import Button from "../Button/Button";
import styles from "./Header.module.css";

function Header() {
  const username = useUserStore((state) => state.user?.username);

  return (
    <header className={styles.header}>
      <div className={styles.greeting}>
        <h1>Hi, {username}</h1>
        <h2>Platform Lunch</h2>
      </div>

      <div className={styles.options}>
        <Button type="button" buttonStyle="secondary">
          <>
            <Plus /> Add new task
          </>
        </Button>

        <Button type="button" buttonStyle="primary">
          <LogOut />
        </Button>
      </div>
    </header>
  );
}

export default Header;
