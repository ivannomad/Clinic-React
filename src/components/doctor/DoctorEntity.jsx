import React from 'react';
import {useNavigate} from "react-router-dom";

const DoctorEntity = ({doctor, number, id}) => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/doctors/schedule`;
    // let path = `/doctors/${id}/schedule`;
    navigate(path, {state: {doctorId: id}});
  }

  return (
      <tr>
        <th scope="row">{id}</th>
        <td colSpan="2">{doctor.firstName + " " + doctor.secondName}</td>
        <td>{doctor.contactNumber}</td>
        <td><button type="button" className="btn btn-primary" onClick={routeChange}>Schedule</button></td>
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