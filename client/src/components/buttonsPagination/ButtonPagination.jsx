import styles from './ButtonPagination.module.css'
import {useState} from 'react'
import {useEffect} from 'react'
//import { useSelector } from 'react-redux';

export default function ButtonPagination(filtred){
   // const countries = useSelector((state) => state.countries);
    console.log(filtred)
    const [page, setPage] = useState(10)
    const next_Page = () => {
        if(filtred.length <= page + 10) {
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
    // const last_Page = () => {
    //     setPage(countries.length - 10)
    // };
    useEffect(() => {
        first_Page()
    }, [filtred]);
    


  // console.log(Filtred_Country)
    return(
        <div className={styles.container}>
            <button className={styles.button} onClick={prev_Page}>Back</button>
            <button className={styles.button} onClick={next_Page}>Next</button>
        </div>
    )
}