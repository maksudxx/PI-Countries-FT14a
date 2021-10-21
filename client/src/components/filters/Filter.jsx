import { filterContinent, getCountries , filterActivities} from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import styles from "./Filter.module.css"

export default function Filter() {
  const dispatch = useDispatch();
  // const a = useSelector((state) => state.countries)
  // const aux = a.filter((b)=> b.touristActivities.some((z)=> z.name === "Rugby"))
  // console.log(a)
  let continents = [
    { name: "All" },
    { name: "Americas" },
    { name: "Asia" },
    { name: "Europe" },
    { name: "Africa" },
    { name: "Polar" },
    { name: "Oceania" },
  ];
  const [continent, setContinent] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
   
    setContinent(e.target.value);
    if (e.target.value === "All") {
      e.preventDefault();
      dispatch(getCountries("asc"));
    }else{
        dispatch(filterContinent(e.target.value));
    }
  };


function handleSubmit(e){
  e.preventDefault(); 
  console.log(input)
  if(!input){
    dispatch(getCountries("asc"))
  }else 
  dispatch(filterActivities(input))
    setInput('')
  }

  return (
    <div>
      <fieldset className={styles.container}>
        <b><p>FILTERS</p></b>
        <div>
          <b><label className={styles.title}>Continent: </label></b>
          <select name="continent" value={continent} onChange={handleChange} className={styles.select}>
            {continents.map((c, index) => (
              <option key={index}>{c.name} </option>
            ))}
          </select>
        </div>
        <br />
        
        <form onSubmit={(e)=>handleSubmit(e)} className={styles.search}>
          <div className={styles.searchBox}>
          <input type="text" name="input" value={input} className={styles.inputSearch} onChange={(e)=> setInput(e.target.value)}    placeholder='Tourist activities...'/>
          <button className={styles.searchButton} type="submit"><FcSearch/></button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
