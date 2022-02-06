import React, {useState} from "react"
import {Alert, Button, Container, Form} from "react-bootstrap";
import AuthService from "../services/AuthService";
import {useNavigate} from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [birthDate, setBirthDate] = useState("")

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);

    await AuthService.register(email, password)
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

    await AuthService.postRegister(firstName, secondName, contactNumber, birthDate)
        .then(() => {
          navigate('/profile')
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
  }

  return (
      <Container id="main-container" className="d-grid h-100">
        <Form id="sign-up-form" className="text-center p-3 w-100" onSubmit={handleSubmit}>
          <h1 className="mb-3 fs-3 fw-normal">Please sign up</h1>
          <Form.Group controlId="sign-up-email-address">
            <Form.Control required type="email" size="lg" placeholder="Email address"
                          className="position-relative" onChange={event => setEmail(event.target.value)}/>
          </Form.Group>
          <Form.Group controlId="sign-up-password">
            <Form.Control required type="password" size="lg" placeholder="Password"
                          className="position-relative" onChange={event => setPassword(event.target.value)}/>
          </Form.Group>
          <Form.Group controlId="sign-up-first-name">
            <Form.Control required type="text" size="lg" placeholder="First Name"
                          className="position-relative" onChange={event => setFirstName(event.target.value)}/>
          </Form.Group>
          <Form.Group controlId="sign-up-second-name">
            <Form.Control required type="text" size="lg" placeholder="Second Name"
                          className="position-relative" onChange={event => setSecondName(event.target.value)}/>
          </Form.Group>
          <Form.Group controlId="sign-up-contact-number">
            <Form.Control required type="text" size="lg" placeholder="Contact Number"
                          className="position-relative"
                          onChange={event => setContactNumber(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-up-birth-date">
            <Form.Control required type="date" size="lg" placeholder="Birth Date"
                          className="position-relative" onChange={event => setBirthDate(event.target.value)}/>
          </Form.Group>
          <div className="d-grid">
            <Button className="mb-3" variant="primary" size="lg" type="submit">
              {loading && (
                  <span className="spinner-border spinner-border-sm"/>
              )}
              Sign Up
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