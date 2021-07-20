import { FcSearch } from "react-icons/fc";
import styles from './SearchBar.module.css';
import { getCountriesName } from "../../redux/actions";
import {useState} from "react"
import {useHistory} from "react-router"
import {useDispatch} from "react-redux"

export default function SearchBar(){

    const history = useHistory();
    const dispatch = useDispatch();

    const [country, setCountry] = useState();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(country){
            history.push('/countries?name='+country)
            dispatch(getCountriesName(country))
            setCountry('')
        }else{
            alert('enter a country')
        }

    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <input type="text" placeholder="Search countries..." className={styles.inputSearch} value={country} onChange={(e)=>setCountry(e.target.value)} />
            <button className={styles.searchButton} type='submit'>
            <FcSearch size={15}/>
            </button>
        </form>
    )
}