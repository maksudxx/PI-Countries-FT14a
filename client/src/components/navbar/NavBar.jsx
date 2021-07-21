import IMG from "../../Img/home.gif";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Order from "../order/Order";
import Filter from "../filters/Filter";
export default function NavBar() {
  return (
    <nav className={styles.container}>
      <Link to="/home">
        <img src={IMG} alt="" width={65} className={styles.imgHome} />
      </Link>
      <Order/>
      <Filter/>
      <div className={styles.menu}>
        <Link to="/countries">
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
