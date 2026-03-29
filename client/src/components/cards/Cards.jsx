import styles from "./Cards.module.css";
import { Link } from "react-router-dom";

export default function Cards({ flag, name, continent, id }) {
  return (
    <div className={styles.cardWrapper}>
      <Link to={"/countries/" + id} className={styles.cardLink}>
        <article className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={flag} className={styles.flag} alt={`${name} flag`} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.name}>{name}</h3>
            <span className={styles.continent}>{continent}</span>
          </div>
        </article>
      </Link>
    </div>
  );
}
