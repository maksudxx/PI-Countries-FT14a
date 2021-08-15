import {Link} from 'react-router-dom'
import Styles from './LandingPage.module.css'

export default function LandingPage(){
    return(
        <div className={Styles.container} align="center">
            <div>
                <h1 className={Styles.title}> COUNTRIES APP</h1>
            </div>
            <br/>
           
           <Link to='/home'>
           <div className={Styles.buttonHome}>
               Enter
           </div>
           </Link>
           
        </div>
    )
}