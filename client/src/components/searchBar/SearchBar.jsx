import styles from "./SearchBar.module.css";
import { getCountriesName, getCountries } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (country.trim() === "") {
      dispatch(getCountries("asc"));
    } else {
      dispatch(getCountriesName(country));
    }
  }, [country, dispatch]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search countries..."
        className={styles.inputSearch}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
    </div>
  );
}

