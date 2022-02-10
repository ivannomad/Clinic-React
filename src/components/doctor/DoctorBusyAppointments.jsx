import React, {useEffect, useState} from 'react';
import DoctorService from "./DoctorService";
import {DoctorAppointmentsView} from "./DoctorAppointmentsView";
import {Card, Col} from "react-bootstrap";

export const DoctorBusyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    DoctorService().getBusyDoctorAppointments()
        .then(res => setAppointments(res.data))
        .catch(error => console.log(error))
  }, [])

  return (
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Busy Appointments:</Card.Title>
            <DoctorAppointmentsView appointments={appointments} free={false}/>
          </Card.Body>
        </Card>
      </Col>
  )
}