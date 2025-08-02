import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <div className={styles.outer}></div>
        <div className={styles.inner}></div>
      </div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
