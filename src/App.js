import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { BoardPatient } from "./components/BoardPatient";
import { BoardDoctor } from "./components/BoardDoctor";
import { Header } from "./components/Header";
import {DoctorScheduleAppointment} from "./components/doctor/DoctorScheduleAppointment";

const App = () => {
  return (
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/register' exact={true} element={<Register />}/>
            <Route path='/login' exact={true} element={<Login />}/>
            <Route path='/home' exact={true} element={<Home />}/>
            <Route path='/profile' exact={true} element={<BoardPatient />}/>
            <Route path='/doctors/profile' exact={true} element={<BoardDoctor />}/>
            <Route path='/doctors/schedule' exact={true} element={<DoctorScheduleAppointment /> }/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
