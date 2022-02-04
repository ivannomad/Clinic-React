import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import AuthService from "../services/AuthService";

const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    try {
      AuthService.login(email, password)
          .then(res => {
            localStorage.setItem('accessToken', res.data.accessToken);
            if (res.status === 200) {
              navigate('/home');
            }
          }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-up-form" className="text-center p-3 w-100" onSubmit={handleLogin}>
        <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
        <Form.Group controlId="sign-up-email-address">
          <Form.Control required type="email" size="lg" placeholder="Email address"
                        className="position-relative" onChange={event => setEmail(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-up-password">
          <Form.Control required type="password" size="lg" placeholder="Password"
                        className="position-relative" onChange={event => setPassword(event.target.value)}/>
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" size="lg" type="submit">Sign Up</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;