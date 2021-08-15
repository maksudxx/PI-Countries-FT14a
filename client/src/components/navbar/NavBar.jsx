import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Order from "../order/Order";
import Filter from "../filters/Filter";
import SearchBar from "../searchBar/SearchBar";
export default function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <h2 className={styles.titleNav}>Countries APP</h2>
      <SearchBar />
      <div className={styles.menu}>
        <Link to="/home">
          <div className={styles.buttonMenu}>
            <p className={styles.option}>View Countries</p>
          </div>
        </Link>
        <Link to="/Activity">
          <div className={styles.buttonMenu}>
            <p className={styles.option}>Create Activity</p>
          </div>
        </Link>
        <Link to="/About">
          <div className={styles.buttonMenu}>
            <p className={styles.option}>About</p>
          </div>
        </Link>
        <Link to="/">
          <div className={styles.buttonMenu}>
            <p className={styles.option}>Exit</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
