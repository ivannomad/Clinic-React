import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Register} from "./components/Register";
import {Login} from "./components/Login";
import {Home} from "./components/Home";
import {DoctorProfile} from "./components/doctor/DoctorProfile";
import {Header} from "./components/Header";
import {DoctorScheduleAppointment} from "./components/doctor/DoctorScheduleAppointment";
import {PatientProfile} from "./components/patient/PatientProfile";
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
            <Route path='/profile' exact={true} element={<PatientProfile/>}/>
            <Route path='/doctors/profile' exact={true} element={<DoctorProfile/>}/>
            <Route path='/doctors/schedule' exact={true} element={<DoctorScheduleAppointment/>}/>
          </Routes>
        </Container>
      </Router>
  );
}

export default App;
