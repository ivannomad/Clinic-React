import React, {useEffect, useState} from "react";
import AuthService from "../services/AuthService";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

export const Header = () => {
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand>
              <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/1029/1029993.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
              />{' '}
              <b>Clinic</b>
            </Navbar.Brand>
          </LinkContainer>

          <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
          >
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            {currentUser && showPatientBoard && (
                <Nav>
                  <LinkContainer to="/profile">
                    <Nav.Link>Profile</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/appointments">
                    <Nav.Link>Appointments</Nav.Link>
                  </LinkContainer>
                </Nav>
            )}

            {currentUser && showDoctorBoard && (
                <Nav>
                  <Nav.Link href='/doctors/profile'>Profile</Nav.Link>
                  <Nav.Link href={`/doctors/${currentUser.userId}/schedule`}>Appointments</Nav.Link>
                </Nav>
            )}
          </Nav>

          {currentUser ? (
              <LinkContainer to="/login">
                <Button variant="warning"
                        onClick={handleLogOut}
                >
                  Sign Out
                </Button>
              </LinkContainer>
          ) : (
              <Nav>
                <LinkContainer to="/login">
                  <Button className="me-2"
                          variant="outline-primary"
                  >
                    Sign In
                  </Button>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Button variant="warning">
                    Sign Up
                  </Button>
                </LinkContainer>
              </Nav>
            )}
        </Container>
      </Navbar>
  );
}