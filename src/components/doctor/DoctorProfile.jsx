import React, {useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {ProfileCard} from "../profile/ProfileCard";
import {DoctorInfo} from "./DoctorInfo";
import DoctorService from "./DoctorService";
import {DoctorFreeAppointments} from "./DoctorFreeAppointments";
import {DoctorBusyAppointments} from "./DoctorBusyAppointments";

export const DoctorProfile = () => {
  const [appointmentMode, setAppointmentMode] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const onClickSetAppointmentMode = e => {
    e.preventDefault();
    setAppointmentMode(!appointmentMode)
  }

  const onSubmitCreateAppointment = async e => {
    e.preventDefault();
    e.target.reset();
    await DoctorService().createDoctorAppointment(date + "T" + time)
        .catch(error => console.log(error))
  }

  return (
      <Container className="container mt-3">
        <Row lg={3} md={2} sm={1}>
          <ProfileCard/>
          <Col>
            <DoctorInfo/>
            <Card className="mt-2">
              <Card.Body className="card-body align-items-center d-flex justify-content-center">
                <Button variant={appointmentMode ? "danger" : "primary"} onClick={onClickSetAppointmentMode}>
                  {appointmentMode ? (
                      <span>Stop</span>
                  ) : (
                      <span>Add new appointment</span>
                  )}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {appointmentMode && (
              <Card border="dark" className="mb-3 mt-sm-3 mt-lg-0">
                <Container id="auth-container" className="d-grid">
                  <Form onSubmit={onSubmitCreateAppointment}>
                    <h4 className="text-center mt-3 mb-3">Add new appointment</h4>
                    <Form.Control type="date" min="2022-02-10" className="text-center p-2 w-125 mb-3"
                                  onChange={event => setDate(event.target.value)}/>
                    <Form.Control type="time" className="text-center p-2 w-125 mb-3"
                                  onChange={event => setTime(event.target.value)}/>
                    <div className="d-grid">
                      <Button type="submit">
                        Create
                      </Button>
                    </div>
                  </Form>
                </Container>
              </Card>
          )}
        </Row>
        <Row xs={2}>
          <DoctorFreeAppointments/>
          <DoctorBusyAppointments/>
        </Row>
      </Container>
  );
};