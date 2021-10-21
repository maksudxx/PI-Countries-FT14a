import styles from './SearchBar.module.css';
import { getCountriesName, getCountries } from "../../redux/actions";
import {useState, useEffect} from "react"
import {useHistory} from "react-router"
import {useDispatch} from "react-redux"

export default function SearchBar(){

    const history = useHistory();
   
    const dispatch = useDispatch();

    const [country, setCountry] = useState();
    
    useEffect(() => {
            if(country){
                dispatch(getCountriesName(country))
            }
            if(country === ''){
                dispatch(getCountries('asc'))
            }   
    },[dispatch, country, history])

    return(
            <div className={styles.container}>
                <input type="text" placeholder="Search countries..." className={styles.inputSearch} value={country} onChange={(e)=>setCountry(e.target.value)} />
            </div>   
    )
}