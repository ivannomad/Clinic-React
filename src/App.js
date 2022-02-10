import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Register} from "./components/Register";
import {Login} from "./components/Login";
import {Home} from "./components/Home";
import {Header} from "./components/Header";
import {Profile} from "./components/profile/Profile";
import {Container} from "react-bootstrap";

const App = () => {
  return (
      <Router>
        <Header/>
        <Container>
          <Routes>
            <Route path='/register' exact={true} element={<Register/>}/>
            <Route path='/login' exact={true} element={<Login/>}/>
            <Route path='/home' exact={true} element={<Home/>}/>
            <Route path='/profile' exact={true} element={<Profile/>}/>
          </Routes>
        </Container>
      </Router>
  );
}

export default App;
