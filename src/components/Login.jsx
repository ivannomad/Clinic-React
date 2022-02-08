import React, {useState} from "react";
import {Alert, Button, Container, FloatingLabel, Form} from "react-bootstrap";
import AuthService from "../services/AuthService";
import {useNavigate} from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = e => {
    e.preventDefault();

    setLoading(true);

    AuthService.login(email, password)
        .then(() => {
          navigate('/profile');
          window.location.reload();
        })
        .catch(error => {
          const resMessage =
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();

          setLoading(false);
          setMessage(resMessage);
        })
  };

  return (
      <Container id="auth-container" className="d-grid h-100">
        <Form id="auth-form" className="text-center p-3 w-100" onSubmit={handleLogin}>
          <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
          <FloatingLabel label="Email address" className="mb-2">
            <Form.Control required type="email" placeholder="Email address"
                          onChange={event => setEmail(event.target.value)}/>
          </FloatingLabel>
          <FloatingLabel label="Password" className="mb-2">
            <Form.Control required type="password" placeholder="Password"
                          onChange={event => setPassword(event.target.value)}/>
          </FloatingLabel>
          <div className="d-grid">
            <Button className="mb-3" variant="primary" size="lg" type="submit" disabled={loading}>
              {loading && (
                  <span className="spinner-border spinner-border-sm"/>
              )}
              Sign In
            </Button>
          </div>
          {message && (
              <Alert variant="danger">
                <Alert.Heading>{message}</Alert.Heading>
              </Alert>
          )}
        </Form>
      </Container>
  );
}