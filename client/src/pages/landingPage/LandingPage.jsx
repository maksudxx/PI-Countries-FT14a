import { Link } from "react-router-dom";
import Styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={Styles.container}>
      <div>
        <h1 className={Styles.title}>COUNTRIES APP</h1>
        <br />
        <Link to="/home" className={Styles.buttonHome}>
          Enter
        </Link>
      </div>
    </div>
  );
}
