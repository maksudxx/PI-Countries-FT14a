import { getCountries } from "../../redux/actions/index";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../../components/cards/Cards";
import styles from "./Countries.module.css";
import Filter from "../../components/filters/Filter"
import Order from "../../components/order/Order"

export default function Countries() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");

  const next_Page = () => {
    if (countries.length <= page + 10) {
      setPage(page);
    } else {
      setPage(page + 10);
    }
  };
  const prev_Page = () => {
    if (page < 9) {
      setPage(0);
    } else {
      setPage(page - 10);
    }
  };
  const first_Page = () => {
    setPage(0);
  };

  useEffect(() => {
    first_Page();
  }, [countries]);

  useEffect(() => {
    setOrder();
    dispatch(getCountries(order));
  }, [dispatch, order]);
  var button = false;

  if (countries.length >= 10) {
    button = true;
  }

  let buttonInit = true;
  let buttonEnd = true;

  if (page === 0) {
    buttonInit = false;
  }

  if (page === 240) {
    buttonEnd = false;
  }

  //const filtred = countries.slice(page, page + 12);
  return (
    <div className={styles.container}> 
    <div className={styles.filtrado}>
      <Filter/>
      <br />
      <br />
      <Order/>
    </div>
        <div align="center">
          {button ? (
            <div className={styles.pagination}>
              {buttonInit ? (
                <button class="btn btn-dark" onClick={prev_Page}>
                  Back
                </button>
              ) : (
                <div></div>
              )}
              {buttonEnd ? (
                <button
                  className={styles.button}
                  class="btn btn-dark"
                  onClick={next_Page}
                >
                  Next
                </button>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div></div>
          )}
          <ul className={styles.countriesGrid}>
            {countries?.length > 0 ? (
              countries
                ?.slice(page, page + 12)
                .map((country, index) => (
                  <Cards
                    key={index}
                    flag={country.flag}
                    name={country.name}
                    continent={country.continent}
                    population={country.population}
                    id={country.id}
                  />
                ))
            ) : (
              null
            )}
          </ul>
        
      </div>
    </div>
  );
}
