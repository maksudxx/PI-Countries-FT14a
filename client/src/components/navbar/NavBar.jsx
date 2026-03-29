import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../searchBar/SearchBar";
import Logo from "../../img/logo.gif";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.brand}>
          <div className={styles.containerLogo}>
            <img src={Logo} alt="logo" className={styles.logo} />
            <h2 className={styles.title}>Countries</h2>
          </div>
        </Link>
        
        <div className={styles.searchSection}>
          <SearchBar />
        </div>

        <div className={styles.menu}>
          <Link to="/Activity" className={styles.link}>
            <span className={styles.option}>Create Activity</span>
          </Link>
          <Link to="/About" className={styles.link}>
            <span className={styles.option}>About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
