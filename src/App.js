import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage.jsx';


    function App() {
      return (
        <BrowserRouter>
        <div className="App">    
          <Switch>
      
            <Route path="/home" exact component={HomePage}/>
            
      
          </Switch>    
        </div>
        </BrowserRouter>
      );
    }
    
    export default App;
