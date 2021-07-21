import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
export default function Cards({ flag, name, continent, id }) {
  return (
    <Link to={"/countries/" + id}>
      <li className={styles.card}>
        <img src={flag} alt="flag" width={100} className={styles.img} />
        <strong>
          <p>{name}</p>
        </strong>
        <strong>
          <p>{continent}</p>
        </strong>
      </li>
    </Link>
  );
}
