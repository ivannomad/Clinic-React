import React from 'react';
import {DoctorAppointmentsView} from "./DoctorAppointmentsView";
import {Card, Col} from "react-bootstrap";

export const DoctorFreeAppointments = ({appointments, onClickCancelAppointment}) => {
  return (
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Free Appointments:</Card.Title>
            <DoctorAppointmentsView appointments={appointments} free={true}
                                    onClickCancelAppointment={onClickCancelAppointment}
            />
          </Card.Body>
        </Card>
      </Col>
  )
}