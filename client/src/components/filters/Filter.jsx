import { filterContinent , getCountries} from "../../redux/actions"
import {useDispatch} from "react-redux"
import {useEffect, useState} from 'react'

export default function Filter(){

    const dispatch = useDispatch();
    let continents = [{name:'All'},{name:'Americas'}, {name:'Asia'}, {name:'Europe'}, {name:'Africa'}, {name:'Polar'}, {name:'Oceania'}]
    const [continent, setContinent] = useState('')

    useEffect(() => {
        if(continent){
            getCountries();
        }if(continent !== 'All'){
            dispatch(filterContinent(continent))
        }
        
    }, [continent, getCountries, dispatch])

    const handleChange = (e)=>{
        setContinent(e.target.value)
        if(e.target.value === "All"){
            dispatch(getCountries("asc"))
        }
            
        // )  
    }
    return(
       
        <div>
            <fieldset>
                <legend>Filters</legend>
                <div>
                    <select name="continent" value={continent} onChange={handleChange}>
                        {continents.map((c, index)=>(
                            <option key={index} >{c.name} </option>
                        ))}
                    </select>
                </div>
            </fieldset>
        </div>
    )
}