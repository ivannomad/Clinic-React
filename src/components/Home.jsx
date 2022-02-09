import React, {useEffect, useState} from "react";
import DoctorEntityList from "./doctor/DoctorEntityList";
import ResourceService from "../services/ResourceService";

export const Home = () => {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    ResourceService().getAllDoctors()
        .then(result => {
          setDoctors(result.data);
        }).catch(exception => {
      console.log(exception)
    });
  }, []);

  return (
      <>
        <div className="row">
          <DoctorEntityList doctors={doctors}/>
        </div>
      </>
  );

}
