import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.css";
import Boards from "../../features/Boards/Boards";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import { X } from "lucide-react";
import { useSidebarStore } from "../../stores/useSidebarStore";

function Sidebar() {
  const { toggleMenu, menuOpen } = useSidebarStore();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 750px)" });

  return (
    <aside className={`${styles.aside} ${menuOpen ? styles.open : ""}`}>
      <div className={styles.logoWrapper}>
        <Logo size="medium" />
        {isTabletOrMobile && (
          <Button
            onClick={() => toggleMenu(false)}
            buttonStyle="primary"
            type="button"
          >
            <X />
          </Button>
        )}
      </div>
      <Boards />
    </aside>
  );
}

export default Sidebar;
