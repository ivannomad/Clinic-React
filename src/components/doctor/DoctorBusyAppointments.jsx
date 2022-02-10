import React from 'react';
import {DoctorAppointmentsView} from "./DoctorAppointmentsView";
import {Card, Col} from "react-bootstrap";

export const DoctorBusyAppointments = ({appointments, onClickCancelAppointment}) => {
  return (
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Busy Appointments:</Card.Title>
            <DoctorAppointmentsView appointments={appointments} free={false}
                                    onClickCancelAppointment={onClickCancelAppointment}
            />
          </Card.Body>
        </Card>
      </Col>
  )
}