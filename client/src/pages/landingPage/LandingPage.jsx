import {Link} from 'react-router-dom'
import Styles from './LandingPage.module.css'

export default function LandingPage(){
    return(
        <div className={Styles.container} align="center">
            <div>
                <h1 className={Styles.title}> WELCOME TO COUNTRIES APP</h1>
            </div>
           
           <Link to='/home'>
           <div className={Styles.buttonHome}>
               Enter
           </div>
           </Link>
           
        </div>
    )
}