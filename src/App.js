import './App.css';
import {Route,Switch} from 'react-router-dom'
import Restaurants from "./pages/Restaurants"
import Nav from './components/Nav'
import Main from './pages/Main'



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
