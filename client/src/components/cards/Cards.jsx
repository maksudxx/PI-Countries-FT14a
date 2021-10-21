import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
export default function Cards({ flag, name, continent, id }) {
  return (
    <Link to={"/countries/" + id}>
      <div className={`card ${styles.card}`}>
        <img src={flag} className="card-img-top" alt="bandera" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{continent}</p>
        </div>
      </div>
    </Link>
  );
}
