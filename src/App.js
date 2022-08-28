import { BrowserRouter, Route, Switch } from 'react-router-dom';


import LandingPage from './components/Landingpage/LandingPage';

import HomePage from './components/HomePage/HomePage.jsx';
import Cities from './components/Cities/Cities.jsx'
import City from './components/City/City.jsx'
import Packages from './components/Packages/Packages.jsx';
import Experiences from './components/Experiences/Experiences.jsx';
import FilterPackages from './components/Filters/FilterPackages';



    function App() {
      return (
        <BrowserRouter>
        <div className="App">    
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/home"  component={HomePage}/>
            <Route exact path="/cities"  component={Cities}/>
            <Route exact path="/city"  component={City}/>
            <Route exact path="/packages"  component={Packages}/>
            <Route exact path="/experiences"  component={Experiences}/> 
            <Route exact path="/filters"  component={FilterPackages}/> 
      
          </Switch>    
        </div>
        </BrowserRouter>
      );
    }
    
    export default App;
