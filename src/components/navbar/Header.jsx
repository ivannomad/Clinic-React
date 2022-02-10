import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import {LogoutButton} from "./LogoutButton";
import {SignInButton} from "./SignInButton";
import {SignUpButton} from "./SignUpButton";

export const Header = ({currentUser, handleLogOut}) => {

  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand>
              <img alt="" src={require("../../assets/images/heart.png")}
                   width="30" height="30" className="d-inline-block align-top"/>
              {' '}
              <b>Clinic</b>
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '100px'}} navbarScroll>
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {currentUser && (
                <LinkContainer to="/profile">
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
            )}
          </Nav>
          {currentUser ? (
              <LogoutButton handleLogOut={handleLogOut}/>
          ) : (
              <>
                <SignInButton/>
                <SignUpButton/>
              </>
          )}
        </Container>
      </Navbar>
  );
}