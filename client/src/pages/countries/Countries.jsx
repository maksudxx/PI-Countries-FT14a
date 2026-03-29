import { getCountries } from "../../redux/actions/index";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../../components/cards/Cards";
import styles from "./Countries.module.css";
import Filter from "../../components/filters/Filter";
import Order from "../../components/order/Order";
import Spinner from "../../components/spinner/Spinner";

export default function Countries() {
  const countries = useSelector((state) => state.countries);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const order = ""

  const countriesPerPage = 12;

  const next_Page = () => {
    if (page + countriesPerPage < countries.length) {
      setPage(page + countriesPerPage);
    }
  };

  const prev_Page = () => {
    if (page > 0) {
      setPage(page - countriesPerPage);
    }
  };

  useEffect(() => {
    setPage(0);
  }, [countries]);

  useEffect(() => {
    dispatch(getCountries(order));
  }, [dispatch, order]);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.controls}>
          <Filter />
          <Order />
        </div>
      </header>

      {isLoading ? (
        <Spinner />
      ) : (
        <section className={styles.mainContent}>
          {countries.length > 0 && (
            <div className={styles.pagination}>
              <button 
                className={styles.pageBtn} 
                onClick={prev_Page} 
                disabled={page === 0}
              >
                Previous
              </button>
              <span className={styles.pageIndicator}>
                Page {Math.floor(page / countriesPerPage) + 1} of {Math.ceil(countries.length / countriesPerPage)}
              </span>
              <button 
                className={styles.pageBtn} 
                onClick={next_Page} 
                disabled={page + countriesPerPage >= countries.length}
              >
                Next
              </button>
            </div>
          )}

          <div className={styles.gridContainer}>
            {countries.length > 0 ? (
              countries
                .slice(page, page + countriesPerPage)
                .map((country) => (
                  <Cards
                    key={country.id}
                    flag={country.flag}
                    name={country.name}
                    continent={country.continent}
                    id={country.id}
                  />
                ))
            ) : (
              <div className={styles.noResults}>
                <h2>No countries found</h2>
                <p>Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
