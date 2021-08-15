import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
export default function Cards({ flag, name, continent, id }) {
  return (
    <Link to={"/countries/" + id}>
      <div className={`card ${styles.card}`}>
        <img src={flag} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{continent}</p>
        </div>
      </div>
    </Link>
  );
}
