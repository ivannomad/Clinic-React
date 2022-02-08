import React from 'react';

const DoctorEntity = ({doctor, number}) => {
  return (
      <li className="list-group-item">
        <div className="row">
          {/*<div className="col-4"><span>{number}.</span> <span>Specialization: {doctor.specialization}</span></div>*/}
          <div className="col-4"><span>FIO: {doctor.firstName + " " + doctor.secondName}</span></div>
          <div className="col-3"><span>{doctor.contactNumber}</span></div>
          <div className="col-5">
            <div className="d-grid justify-content-end">
              <button type="button" className="btn btn-primary">Schedule Appointment</button>
            </div>
          </div>
        </div>
      </li>
  );
};

export default DoctorEntity;