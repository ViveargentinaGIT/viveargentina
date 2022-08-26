import { Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import City from './components/City';
import Cities from './components/Cities';
import Packages from './components/Packages'
import './App.css';

function App() {
  return (
    <div className="App">
          <Route exact path={"/"} component={SearchBar} />
          <Route path={"/city"} component={City} />
          <Route path={"/cities"} component={Cities} />
          <Route path={"/packages"} component={Packages} />
    </div>
  );
}

export default App;
