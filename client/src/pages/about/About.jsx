import IMG from '../../img/tecnologies.png'
import IMG2 from '../../img/backend.jpg'
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
      <img src={IMG} alt="IMG Tecnologies"/>
      <br/>
      <img src={IMG2} alt="IMG" width={600}/>
    </div>
  );
}
