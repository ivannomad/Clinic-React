import React, {useEffect, useState} from 'react'
import {Card, Col, Container, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import DoctorService from "./DoctorService";
import {TimeSlotsByDay} from "./TimeSlotsByDay";

export const  DoctorSchedule = () => {
  const location = useLocation();
  const { doctorId, doctor } = location.state;

  const [appointments, setAppointments] = useState([]);
  const [daysWithAppointments, setDaysWithAppointments] = useState([]);

  useEffect(() => {
    DoctorService().getAllDoctorAppointments(doctorId)
        .then(res => {
          const dates = res.map(appointment => {
            return (new Date(appointment.dateAndTime).toISOString().split('T')[0]);
          })

          const uniqueDates = [... new Set(dates)];

          setAppointments(res);
          setDaysWithAppointments(uniqueDates);

          console.log(res);
        })
        .catch(error => {
          console.log(error);
    });
  }, []);

  return (
      <Container className="container mt-3">
        <Col>
          <Row lg={2} sm={1}>

            <Col className="mb-3">
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={require("../../assets/images/patient.png")}
                         alt="Patient" className="rounded-circle"
                         width="200"/>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col className="my-auto">
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <h6>First Name</h6>
                    </Col>
                    <Col sm={7} className="text-secondary">
                      {doctor.firstName}
                    </Col>
                  </Row>
                  <hr/>
                  <Row>
                    <Col>
                      <h6>Second Name</h6>
                    </Col>
                    <Col sm={7} className="text-secondary">
                      {doctor.secondName}
                    </Col>
                  </Row>
                  <hr/>
                  <Row>
                    <Col>
                      <h6>Contact Number</h6>
                    </Col>
                    <Col sm={7} className="text-secondary">
                      {doctor.contactNumber}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>


          <Row>
            <h3 className="mt-2 text-center">Doctor's schedule</h3>
          </Row>

          <Row lg={7} sm={3}>
            {daysWithAppointments.map((date, index) =>
                <TimeSlotsByDay key={index + 1} date={date} appointments={appointments} />
            )}
          </Row>
        </Col>
      </Container>
  )
}
