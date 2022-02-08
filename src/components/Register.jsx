import React, {useState} from "react"
import {Alert, Button, Container, FloatingLabel, Form} from "react-bootstrap";
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
  }

  return (
      <Container id="auth-container" className="d-grid h-100">
        <Form id="auth-form" className="text-center p-3 w-100" onSubmit={handleSubmit}>
          <h1 className="mb-3 fs-3 fw-normal">Please sign up</h1>
          <FloatingLabel label="Email address" className="mb-2">
            <Form.Control required type="email" placeholder="Email address"
                          onChange={event => setEmail(event.target.value)}/>
          </FloatingLabel>
          <FloatingLabel label="Password" className="mb-2">
            <Form.Control required type="password" placeholder="Password"
                          onChange={event => setPassword(event.target.value)}/>
          </FloatingLabel>
          <FloatingLabel label="First Name" className="mb-2">
            <Form.Control required type="text" placeholder="First Name"
                          onChange={event => setFirstName(event.target.value)}/>
          </FloatingLabel>
          <FloatingLabel label="Second Name" className="mb-2">
            <Form.Control required type="text" placeholder="Second Name"
                          onChange={event => setSecondName(event.target.value)}/>
          </FloatingLabel>
          <FloatingLabel label="Contact Number" className="mb-2">
            <Form.Control required type="text" placeholder="Contact Number"
                          onChange={event => setContactNumber(event.target.value)}/>
          </FloatingLabel>
          <FloatingLabel label="Birth Date" className="mb-2">
            <Form.Control required type="date" placeholder="Birth Date"
                           onChange={event => setBirthDate(event.target.value)}/>
          </FloatingLabel>
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