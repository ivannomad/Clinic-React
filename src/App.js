import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Register} from "./Register";
import {Login} from "./Login";
import {StartPage} from "./StartPage";
import {Home} from "./Home";

function App() {
  return (
      <Router>
        <Route path='/' exact={true} element={<StartPage />}/>
        <Route path='/register' exact={true} element={<Register />}/>
        <Route path='/login' exact={true} element={<Login />}/>
        <Route path='/home' exact={true} element={<Home />}/>
      </Router>
  );
}

export default App;
