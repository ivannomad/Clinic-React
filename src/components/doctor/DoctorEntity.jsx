import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

const DoctorEntity = ({doctor, number, id}) => {

  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/doctors/${id}/schedule`;
    navigate(path, {state: {doctorId: id, doctor: doctor}});
  }

  return (
      <tr>
        <th scope="row">{id}</th>
        <td colSpan="2">{doctor.firstName + " " + doctor.secondName}</td>
        <td>{doctor.contactNumber}</td>
        <td><Button variant="primary" onClick={routeChange}>Schedule</Button></td>
      </tr>
/*
      <li className="list-group-item">
        <div className="row">
          <div className="col-4"><span>Full name: {doctor.firstName + " " + doctor.secondName}</span></div>
          <div className="col-3"><span>Phone number: {doctor.contactNumber}</span></div>
          <div className="col-5">
            <div className="d-grid justify-content-end">
              <button type="button" className="btn btn-primary" onClick={routeChange}>Schedule</button>
            </div>
          </div>
        </div>
      </li>
*/
  );
};

export default DoctorEntity;