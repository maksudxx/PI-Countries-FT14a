import { getCountries } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./CreateActivity.module.css";

export default function CreateActivity() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [input, setInput] = useState({
    name: "",
    duration: "",
    season: "",
    difficulty: "",
    countries: [],
  });

  const seasons = [
    { name: "Autumn" },
    { name: "Winter" },
    { name: "Spring" },
    { name: "Summer" },
  ];

  useEffect(() => {
    dispatch(getCountries("asc"));
  }, [dispatch]);

  let arrayCountries = [];
  let clickCountry = (e) => {
    arrayCountries.push(e.target.value);
    console.log(arrayCountries);
  };

  const handleInputChange = function (e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let { name, difficulty, duration, season } = input;
      console.log(input.name);
      let body = { name, difficulty, duration, season, arrayCountries };
      console.log(body);

      await fetch("http://localhost:3001/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      alert("Tourist Activity created..!");
      setInput({
        name: "",
        duration: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <br />
      <u>
        <h2>CREATE TOURIST ACTIVITY</h2>
      </u>
      <div className={styles.container}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="name"
            placeholder="Activity..."
            value={input.name}
            onChange={handleInputChange}
            className={styles.inputText}
            required={true}
          />{" "}
          <br />
          <select
            onChange={handleInputChange}
            name="difficulty"
            className={styles.select}
          >
            <option>*******DIFFICULTY*******</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </select>
          <br />
          <input
            type="text"
            name="duration"
            placeholder="Duration [hs]"
            value={input.duration}
            onChange={handleInputChange}
            className={styles.inputText}
            required={true}
          />{" "}
          <br />
          <select
            name="season"
            onChange={handleInputChange}
            className={styles.select}
          >
            <option>*******SEASON*******</option>
            {seasons.map((season) => (
              <option value={season.name}>{season.name}</option>
            ))}
          </select>
          <br />
          <h4 className={styles.subTitle}>Select countries</h4>
          <select
            multiple
            requires
            name="countries"
            className={styles.containerCountries}
          >
            {countries.length > 0 ? (
              countries.map((c) => (
                <option key={c.id} value={c.id} onClick={clickCountry}>
                  {c.name}
                </option>
              ))
            ) : (
              <option disabled={true}>Country not found</option>
            )}
          </select>
          <br />
          <button type="submit" className={`${styles.button} btn btn-dark`}>
            Create Activity
          </button>
        </form>
      </div>
      <br />
      <br />
    </>
  );
}
