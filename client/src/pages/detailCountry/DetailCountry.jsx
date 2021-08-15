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

   return (
    <div align="center">
        <Link to="/countries">
        <div className={`btn btn-dark ${styles.button}`} >Back</div>
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
        { country.touristActivities?.length > 0 ?(
          <table className={`${styles.tabla}  "table"`}>
          <thead>
            <td>NAME</td>
            <td>DIFFICULTY</td>
            <td>DURATION</td>
            <td>SEASON</td>
          </thead>
          {
            
              country.touristActivities?.map((activitie, id) => (
                <tr key={id}>
                  <td>{activitie.name}</td>
                  <td>{activitie.difficulty}</td>
                  <td>{activitie.duration}</td>
                  <td>{activitie.season}</td>
                </tr>
              )
            )
          }
        </table>): <div> <p> <strong>TOURIST ACTIVITIES NOT FOUND</strong></p></div>
        }
        
      </div>
      
    </div>
  );
}
