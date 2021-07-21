import { getCountries } from "../../redux/actions/index";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../../components/cards/Cards";
import styles from "./Countries.module.css";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Countries() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const next_Page = () => {
    if (countries.length <= page + 10) {
      setPage(page);
    } else setPage(page + 10);
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
    dispatch(getCountries(order));
  }, []);

  const filtred = countries.slice(page, page + 10);
  return (
    <div>
      <h1 className={styles.title}>Countries</h1>
      <SearchBar />
      <div className={styles.container}>
        <button className={styles.button} onClick={prev_Page}>
          Back
        </button>
        <button className={styles.button} onClick={next_Page}>
          Next
        </button>
      </div>
      <ul className={styles.countriesGrid}>
        {filtred &&
          filtred.map((country, index) => (
            <Cards
              key={index}
              flag={country.flag}
              name={country.name}
              continent={country.continent}
              id={country.id}
            />
          ))}
      </ul>
    </div>
  );
}
