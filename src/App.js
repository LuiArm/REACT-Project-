import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch} from 'react-router-dom'
import Restaurants from "./pages/Restaurants"
import Nav from './components/Nav'
import Main from './pages/Main'
import Restaurant from './components/Restaurant'



function App() {
  return (
    
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/restaurants">
          <Restaurants />
        </Route>
        <Route path="/restaurant/:name"
        render={(props) => <Restaurant {...props}/>
        }         
        />
      </Switch>
    </div>
  );
}

export default App;
