import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries, orderPopulation} from "../../redux/actions";
import styles from './Order.module.css'

export default function Order() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("asc");
  

  const handleChange = (e) => {
    setOrder(e.target.value);
    dispatch(getCountries(e.target.value));
  };

  function handleChangePopulation(e){
    setOrder(e.target.value);
    dispatch(orderPopulation(e.target.value));
    console.log(e.target.value)
  };
  return (
    <div className={styles.container}>
        <p className={styles.title}>ORDER COUNTRIES BY</p>
        <div className={styles.order}>
          <label>Population: </label>
          <select value={order} onChange={handleChangePopulation}>
            <option value={"ASC"}>ASC</option>
            <option value={"DESC"}>DESC</option>
        </select>
        </div>
         
       <div className={styles.order}>
         <label>Name: </label>
       <select value={order} onChange={handleChange}>
         
         <option value={"ASC"}>ASC</option>
         <option value={"DESC"}>DESC</option>
       </select>
       </div>
    </div>
  );
}