import {Card, Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";

export const DoctorAppointmentsView = ({appointments, free}) => {
  const [border, setBorder] = useState('')

  useEffect(() => {
    if (free) {
      setBorder("info")
    } else {
      setBorder("danger")
    }
  }, [])

  return (
      <Row md={1} lg={2}>
        {appointments.map(appointment =>
            <Col key={appointment.id}>
              <Card border={border} bg={"light"} className="mb-2">
                <Card.Body>
                  <Card.Title>Appointment</Card.Title>
                  <Card.Text>
                    <div className="mt-2">
                      <strong>Doctor: </strong> {appointment.doctor.firstName + " " + appointment.doctor.secondName}
                    </div>
                    {!free && (
                        <div className="mt-2">
                          <strong>Patient: </strong> {appointment.patient.firstName + " " + appointment.patient.secondName}
                        </div>
                    )}
                    <div className="mt-2">
                      <strong>Date: </strong> {new Date(appointment.dateAndTime).toLocaleDateString()}
                    </div>
                    <div className="mt-2">
                      <strong>Time: </strong> {new Date(appointment.dateAndTime).toLocaleTimeString()}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        )}
      </Row>
  )
}