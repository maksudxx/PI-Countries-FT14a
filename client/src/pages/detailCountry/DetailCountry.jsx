import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions";
import styles from "./DetailCountry.module.css";
import Spinner from "../../components/spinner/Spinner";

export default function DetailCountry() {
  const country = useSelector((state) => state.countryDetail);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/countries" className={styles.backBtn}>
          ← Back to Countries
        </Link>
      </header>

      <div className={styles.content}>
        <section className={styles.mainInfo}>
          <div className={styles.flagContainer}>
            <img src={country.flag} alt={`${country.name} flag`} className={styles.flag} />
          </div>
          <div className={styles.details}>
            <h1 className={styles.name}>{country.name}</h1>
            <span className={styles.idCode}>ID: {country.id}</span>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.label}>Capital</span>
                <span className={styles.value}>{country.capital}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.label}>Sub-region</span>
                <span className={styles.value}>{country.subregion}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.label}>Area</span>
                <span className={styles.value}>{country.area?.toLocaleString()} Km²</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.label}>Population</span>
                <span className={styles.value}>{country.population?.toLocaleString()} inhabitants</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.activitiesSection}>
          <h2 className={styles.sectionTitle}>Tourist Activities</h2>
          {country.touristActivities?.length > 0 ? (
            <div className={styles.activitiesGrid}>
              {country.touristActivities.map((activity, idx) => (
                <div key={idx} className={styles.activityCard}>
                  <h3 className={styles.activityName}>{activity.name}</h3>
                  <div className={styles.activityDetails}>
                    <p><span>Difficulty:</span> {activity.difficulty}</p>
                    <p><span>Duration:</span> {activity.duration} hs</p>
                    <p><span>Season:</span> {activity.season}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noActivities}>
              <p>No tourist activities found for this country.</p>
              <Link to="/activity" className={styles.createLink}>Create New Activity</Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
