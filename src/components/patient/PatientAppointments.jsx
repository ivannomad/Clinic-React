import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import authHeader from "../../services/AuthHeader";
import AuthService from "../../services/AuthService";

export const PatientAppointments = () => {

    const currentUser = AuthService.getCurrentUser();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/patients/" + currentUser.userId + "/appointments", {headers: authHeader()})
            .then(res => setAppointments(res.data))
            .catch(error => console.log(error))
    }, [appointments])

    const handleButton = async e => {
        e.preventDefault();
        await axios.delete("http://localhost:8080/patients/" + currentUser.userId + "/appointments/" + e.target.value + "/cancel", {headers: authHeader()})
    };

    return (
        <Container>
            <Row xs={1} md={2} className="g-4 mt-0">
                {appointments.map(appointment =>
                    <Col key={appointment.id}>
                        <Card bg={"light"}>
                            <Card.Body>
                                <Card.Title>Appointment</Card.Title>
                                <Card.Text>
                                    <div className="mt-2">
                                        <strong>Doctor: </strong> {appointment.doctor.firstName + " " + appointment.doctor.secondName}
                                    </div>
                                    <div className="mt-2">
                                        <strong>Date: </strong> {appointment.dateAndTime}
                                    </div>
                                    <div className="mt-2">
                                        <Button variant={"danger"} value={appointment.id}
                                                onClick={handleButton}>Cancel</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    )
}