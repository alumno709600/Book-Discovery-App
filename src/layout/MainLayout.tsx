import { Outlet, Link } from "react-router-dom";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <h2 className={styles.logo}>📚 BookDiscovery</h2>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/search/genre">Genre</Link>
          <Link to="/search/author">Author</Link>
          <Link to="/reading-list">Reading List</Link>
        </div>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
