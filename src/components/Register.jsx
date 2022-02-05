import React, {useState} from "react"
import {Alert, Button, Container, Form} from "react-bootstrap";
import AuthService from "../services/AuthService";
import {useNavigate} from 'react-router-dom';

export const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [responseStatus, setResponseStatus] = useState(null)

    const handleSubmit = event => {
        event.preventDefault();
        AuthService.register(email, password)
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.data));

                navigate('/profile');
                window.location.reload();
            })
            .catch(error => {
                setResponseStatus(error.response.status)
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
                <Form.Group className="mb-3" controlId="sign-up-password">
                    <Form.Control required type="password" size="lg" placeholder="Password"
                                  className="position-relative" onChange={event => setPassword(event.target.value)}/>
                </Form.Group>
                <div className="d-grid">
                    <Button className="mb-3" variant="primary" size="lg" type="submit">Sign Up</Button>
                </div>
                {responseStatus === 409 && (
                    <Alert variant="danger">
                        <Alert.Heading>This email is already in use!</Alert.Heading>
                    </Alert>
                )}
            </Form>
        </Container>
    );
}