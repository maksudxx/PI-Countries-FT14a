import './App.css';
import {Switch , Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import NavBar from './components/navbar/NavBar'
import Countries from './pages/countries/Countries';
import DetailCountry from './pages/detailCountry/DetailCountry';
import CreateActivity from './pages/createActivity/CreateActivity';
import About from './pages/about/About';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <NavBar/>
          <Route exact path="/" component={Countries}/>
          <Route exact path="/countries" component={Countries}/>
          <Route exact path="/countries/:id" component={DetailCountry}/>
          <Route exact path='/activity' component={CreateActivity}/>
          <Route exact path='/About' component={About}/>
          <Route path = "/" component={Footer} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
