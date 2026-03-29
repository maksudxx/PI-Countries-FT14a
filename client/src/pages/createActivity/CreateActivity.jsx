import { getCountries } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./CreateActivity.module.css";
import { Link } from "react-router-dom";

export default function CreateActivity() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.sort((a,b) => a.name.localeCompare(b.name)));
  
  const [input, setInput] = useState({
    name: "",
    duration: "",
    season: "",
    difficulty: "",
    selectedCountries: [],
  });

  const seasons = ["Autumn", "Winter", "Spring", "Summer"];
  const difficulties = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(getCountries("asc"));
  }, [dispatch]);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountrySelect = (e) => {
    const value = e.target.value;
    if (!input.selectedCountries.includes(value)) {
      setInput({
        ...input,
        selectedCountries: [...input.selectedCountries, value],
      });
    }
  };

  const removeCountry = (id) => {
    setInput({
      ...input,
      selectedCountries: input.selectedCountries.filter(c => c !== id),
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (input.selectedCountries.length === 0) {
      alert("Please select at least one country");
      return;
    }

    try {
      const { name, difficulty, duration, season, selectedCountries } = input;
      const body = { 
        name, 
        difficulty, 
        duration, 
        season, 
        arrayCountries: selectedCountries 
      };

      const response = await fetch("http://localhost:3001/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        alert('Tourist Activity created successfully!');
        setInput({
          name: "",
          duration: "",
          season: "",
          difficulty: "",
          selectedCountries: [],
        });
      } else {
        alert('Failed to create activity');
      }
    } catch (err) {
      console.error(err.message);
      alert('Error connecting to server');
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/countries" className={styles.backBtn}>← Back</Link>
        <h1 className={styles.title}>Create Tourist Activity</h1>
      </header>

      <div className={styles.formCard}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Activity Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Skiing, Hiking..."
              value={input.name}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Difficulty (1-5)</label>
              <select
                name="difficulty"
                value={input.difficulty}
                onChange={handleInputChange}
                className={styles.select}
                required
              >
                <option value="">Select difficulty</option>
                {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Duration (hours)</label>
              <input
                type="number"
                name="duration"
                placeholder="0"
                value={input.duration}
                onChange={handleInputChange}
                className={styles.input}
                required
                min="1"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Season</label>
            <div className={styles.radioGroup}>
              {seasons.map(s => (
                <label key={s} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="season"
                    value={s}
                    checked={input.season === s}
                    onChange={handleInputChange}
                    className={styles.radioInput}
                    required
                  />
                  <span className={styles.radioText}>{s}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Select Countries</label>
            <select
              className={styles.select}
              onChange={handleCountrySelect}
              value=""
            >
              <option value="" disabled>Choose countries...</option>
              {countries.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            
            <div className={styles.selectedContainer}>
              {input.selectedCountries.map(id => {
                const country = countries.find(c => c.id === id);
                return (
                  <div key={id} className={styles.tag}>
                    {country?.name}
                    <button type="button" onClick={() => removeCountry(id)} className={styles.removeBtn}>×</button>
                  </div>
                );
              })}
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Create Activity
          </button>
        </form>
      </div>
    </div>
  );
}
