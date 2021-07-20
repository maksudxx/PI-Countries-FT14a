import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries, orderPopMin, orderPopMax } from "../../redux/actions";

export default function Order() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("asc");
  const [type, setType] = useState("Alphabetical");

  const handleChange = (e) => {
    setOrder(e.target.value);
    dispatch(getCountries(e.target.value));
  };

  function handleChangePopulation(e){
    setOrder(e.target.value);
    dispatch(getCountries(e.target.value));
    console.log(e.target.value)
  };
  return (
    <div>

        <h4>ORDER BY</h4>

         <select value={type} onChange={handleChangePopulation}>
            <option>----POPULATION----</option>
            <option value={"ASC"}>ASC</option>
            <option value={"DESC"}>DESC</option>
        </select>
        <select value={order} onChange={handleChange}>
          <option>----ALPHABETICAL----</option>
          <option value={"ASC"}>ASC</option>
          <option value={"DESC"}>DESC</option>
        </select>
    </div>
  );
}
