import HTML from '../../img/soft/html.png';
import CSS from '../../img/soft/css.png';
import EXPRESS from '../../img/soft/express.png';
import BOOTSTRAP from '../../img/soft/bootstrap.png';
import JAVASCRIPT from '../../img/soft/javascript.png'
import NODE from '../../img/soft/nodejs.png';
import POSTGRESQL from '../../img/soft/postgresql.jpg';
import REACT from '../../img/soft/react.png';
import REDUX from '../../img/soft/redux.jpg'
import SEQUELIZE from '../../img/soft/sequelize.png'
import MATERIAL from '../../img/soft/material.png'
import styles from './About.module.css'
export default function About() {
  return (
    <div>
      <h1 className={styles.title}>PI-COUNTRIES</h1>
      <p className={styles.content}>
        <strong>
          This project was created as part of my fullstack developer education
          at Henry bootcamp. In order to map all the different Countries, this
          app consumes data from the countries API. It is also possible to
          create a new tourist Activity , entering a name, difficulty, duration,
          season and countries. Any feedback you can provide will be greatly
          appreciated. Thank you.
        </strong>
      </p>

      <h2>
        <strong>Technology and frameworks used</strong>
      </h2>
     <div>
     <div className={styles.imagesGrid}>
              <div>
                <img src={HTML} alt="html" width={100} className={styles.image}/>
                <p>HTML</p>
              </div>
              <div>
                <img src={CSS} alt="css" width={100} className={styles.image}/>
                <p>CSS</p>
              </div>
              <div>
                <img src={JAVASCRIPT} alt="javascript" width={100} className={styles.image}/>
                <p>Javascript</p>
              </div>
              <div>
                <img src={BOOTSTRAP} alt="bootstrap" width={100} className={styles.image}/>
                <p>Bootstrap</p>
              </div>
              <div>
                <img src={REACT} alt="react" width={100} className={styles.image}/>
                <p>React</p>
              </div>
              <div>
                <img src={MATERIAL} alt="material-ui" width={100} className={styles.image}/>
                <p>Material-UI</p>
              </div>
              <div>
                <img src={REDUX} alt="redux" width={100} className={styles.image}/>
                <p>Redux</p>
              </div>
              <div>
                <img src={NODE} alt="node" width={180} className={styles.image}/>
                <p>NodeJs</p>
              </div>
              <div>
                <img src={EXPRESS} alt="express" width={180} className={styles.image}/>
                <p>Express</p>
              </div>
              <div>
                <img src={SEQUELIZE} alt="sequelize" width={180} className={styles.image}/>
                <p>Sequelize</p>
              </div>
              <div>
                <img src={POSTGRESQL} alt="postgresql" width={120} className={styles.image}/>
              </div>
          </div>
     </div>
     <br /><br />
    </div>
  );
}
