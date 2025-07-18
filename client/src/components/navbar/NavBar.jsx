import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../searchBar/SearchBar";
import Logo from "../../img/logo.gif";
export default function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <div className={styles.containerLogo}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <h2 className={styles.title}>Countries APP</h2>
        </div>
      </Link>
      <SearchBar />
      <div className={styles.menu}>
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
            <p className={styles.option}>Iniciar sesión</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
