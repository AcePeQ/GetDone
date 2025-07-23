import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />

      <Sidebar />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
