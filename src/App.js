import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './components/landingpage/LandingPage';
import HomePage from './components/home/HomePage.jsx';
/* import Cities from './components/cities/Cities.jsx';
import Packages from './components/packages/Packages.jsx';
import Experiences from './components/experiences/Experiences.jsx'; */


    function App() {
      return (
        <BrowserRouter>
        <div className="App">    
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/home" exact component={HomePage}/>
{/*             <Route path="/cities" exact component={Cities}/>
            <Route path="/packages" exact component={Packages}/>
            <Route path="/experiences" exact component={Experiences}/>
 */}
            
      
          </Switch>    
        </div>
        </BrowserRouter>
      );
    }
    
    export default App;
