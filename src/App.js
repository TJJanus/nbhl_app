import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Play from './Components/Play/Gamecard';


function App() {
  return (
    <Router>
    <div className="App">

      <Header />
      
      <Route exact path='/home'> 
      <Landing />
      </Route>

      <Route exact path='/about'> 
      <About />
      </Route>

      <Route exact path='/play'> 
      <Play />
      </Route>




    </div>


    </Router>
  );
}

export default App;
