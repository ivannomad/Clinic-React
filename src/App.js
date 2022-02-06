import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import AuthService from "./services/AuthService";

import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./Home";
import { BoardPatient } from "./components/BoardPatient";
import { BoardDoctor } from "./components/BoardDoctor";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showPatientBoard, setPatientBoard] = useState(false);
  const [showDoctorBoard, setDoctorBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setPatientBoard(user.authorities.includes('ROLE_PATIENT'));
      setDoctorBoard(user.authorities.includes('ROLE_DOCTOR'));
    }
  }, []);

  const handleLogOut = () => {
    AuthService.logout();
    setPatientBoard(false);
    setDoctorBoard(false);
    setCurrentUser(undefined);
  }

  return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">
              <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/1029/1029993.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
              />{' '}
              <b>Clinic</b>
            </Navbar.Brand>

            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>

              {currentUser && showPatientBoard && (
                  <Nav>
                    <Nav.Link href={`/patients/${currentUser.userId}/cabinet`}>Cabinet</Nav.Link>
                    <Nav.Link href={`/patients/${currentUser.userId}/appointments`}>Appointments</Nav.Link>
                  </Nav>
                )}

              {currentUser && showDoctorBoard && (
                  <Nav>
                    <Nav.Link href={`/doctor/${currentUser.userId}/Cabinet`}>Cabinet</Nav.Link>
                    <Nav.Link href={`/doctor/${currentUser.userId}/schedule`}>Appointments</Nav.Link>
                  </Nav>
              )}
            </Nav>

            {currentUser ? (
                <Nav>
                  <Button variant="warning"
                          href="/login"
                          onClick={handleLogOut}
                  >
                    Sign Out
                  </Button>
                </Nav>
            ) : (
                <Nav>
                  <Button className="me-2"
                          variant="outline-primary"
                          href="/login"
                  >
                    Sign In
                  </Button>
                  <Button variant="warning"
                          href="/register"
                  >
                    Sign Up
                  </Button>
                </Nav>
            )}
          </Container>
        </Navbar>

        <div className="container mt-3">
          <Routes>
            <Route path='/register' exact={true} element={<Register />}/>
            <Route path='/login' exact={true} element={<Login />}/>
            <Route path='/home' exact={true} element={<Home />}/>
            <Route path='/profile' exact={true} element={<BoardPatient />}/>
            <Route path={`/doctor/:id/cabinet`} exact={true} element={<BoardDoctor />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
