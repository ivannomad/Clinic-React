import React from 'react';
import {PatientAppointments} from "./PatientAppointments";
import {PatientCard} from "./PatientCard";
import {PatientInfo} from "./PatientInfo";
import {Container, Row} from "react-bootstrap";

export const PatientProfile = () => {

  return (
      <Container className="container mt-3">
        <Row>
          <PatientCard/>
          <PatientInfo/>
          <PatientAppointments/>
        </Row>
      </Container>
  );
};