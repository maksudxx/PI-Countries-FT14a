import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions";
import styles from "./DetailCountry.module.css";
export default function DetailCountry() {
  const country = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(getCountryDetail(id.id));
  }, [dispatch, id.id]);

  let tourist = [];
  for (let x in country.touristActivities) {
    tourist.push(country.touristActivities[x]["name"].split(""));
  }
  return (
    <div align="center">
        <Link to="/countries">
        <div className={styles.button}>Back</div>
      </Link>
      <div className={styles.container}>
        <h3>DETAILS</h3>
        <img src={country.flag} alt="flag" width={250} />
        <p>
          <strong>ID COUNTRY:</strong> {country.id}
        </p>
        <p>
          <strong>COUNTRY:</strong> {country.name}
        </p>
        <p>
          <strong>CAPITAL:</strong> {country.capital}
        </p>
        <p>
          <strong>SUB-REGION:</strong> {country.subregion}
        </p>
        <p>
          <strong>AREA:</strong> {country.area}Km²
        </p>
        <p>
          <strong>POPULATION:</strong> {country.population} habitants
        </p>
        <p>
          <strong>TOURIST ACTIVITIES:</strong>
        </p>
        <table className={styles.tabla}>
          <tr>
            <td>name</td>
            <td>difficulty</td>
            <td>duration</td>
            <td>season</td>
          </tr>
          {country.touristActivities?.map((activitie, id) => (
            <tr key={id}>
              <td>{activitie.name}</td>
              <td>{activitie.difficulty}</td>
              <td>{activitie.duration}</td>
              <td>{activitie.season}</td>
            </tr>
          ))}
        </table>
      </div>
      
    </div>
  );
}
