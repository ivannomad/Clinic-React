import React from 'react';
import DoctorEntity from "./DoctorEntity";

const DoctorEntityList = ({doctors}) => {
  return (
      <div className="col">
        <ul className="list-group">
          {doctors.map((doctor, index) =>
              <DoctorEntity doctor={doctor} number={index + 1} key={doctor.id}/>
          )}
        </ul>
      </div>
  );
};

export default DoctorEntityList;