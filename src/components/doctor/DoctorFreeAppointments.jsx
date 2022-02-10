import React, {useEffect, useState} from 'react';
import DoctorService from "./DoctorService";
import {DoctorAppointmentsView} from "./DoctorAppointmentsView";
import {Card, Col} from "react-bootstrap";

export const DoctorFreeAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    DoctorService().getFreeDoctorAppointments()
        .then(res => setAppointments(res.data))
        .catch(error => console.log(error))
  }, [])

  return (
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Free Appointments:</Card.Title>
            <DoctorAppointmentsView appointments={appointments} free={true}/>
          </Card.Body>
        </Card>
      </Col>
  )
}