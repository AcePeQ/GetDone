import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.css";
import Boards from "../../features/Boards/Boards";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import { X } from "lucide-react";
import { useSidebarStore } from "../../stores/useSidebarStore";

function Sidebar() {
  const { toggleMenu } = useSidebarStore();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 925px)" });

  return (
    <aside className={styles.aside}>
      <Button
        onClick={() => toggleMenu(false)}
        buttonStyle="primary"
        type="button"
      >
        <X />
      </Button>

      <div className={styles.logoWrapper}>
        <Logo size="medium" />
      </div>
      <Boards />
    </aside>
  );
}

export default Sidebar;
