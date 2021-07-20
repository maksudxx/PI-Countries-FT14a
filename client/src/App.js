import './App.css';
import {Switch , Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import NavBar from './components/navbar/NavBar'
import Countries from './pages/countries/Countries';
import DetailCountry from './pages/detailCountry/DetailCountry';
import CreateActivity from './pages/createActivity/CreateActivity';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/">
          <NavBar/>
          <Route exact path="/countries" component={Countries}/>
          <Route exact path="/countries/:id" component={DetailCountry}/>
          <Route exact path='/activity' component={CreateActivity}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
