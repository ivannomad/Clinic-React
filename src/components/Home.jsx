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

/*
  const [doctors, setDoctors] = useState([
    {id: "78fe3030-6a76-4f0d-a633-4a05be189a99", firstName: "Oleg", lastName: "Orlov", specialization: "Cardiologist"},
    {
      id: "727b1656-bef4-4c79-a6d2-f37ac6d3879b",
      firstName: "Denys",
      lastName: "Slozkin",
      specialization: "Dermatologist"
    },
    {
      id: "20d82a89-8e54-435c-9f55-662993026fe2",
      firstName: "Denys",
      lastName: "Levchenko",
      specialization: "Ophthalmologist"
    },
    {
      id: "772caa3e-a286-487b-b59e-77201736aea1",
      firstName: "Ivan",
      lastName: "Il`in",
      specialization: "Endocrinologist"
    },
    {
      id: "a8c3788f-a9b2-4d99-aef2-e8e747fe5a9d",
      firstName: "Ivan",
      lastName: "Vasylenko",
      specialization: "Gastroenterologist"
    },
    {
      id: "131e96a2-8868-4bb4-bd71-50baeaca8d7b",
      firstName: "Oleg",
      lastName: "Zraichenko",
      specialization: "Anesthesiologist"
    }
  ]);
*/

  return (
      <>
        <div className="row">
          <DoctorEntityList doctors={doctors}/>
        </div>
      </>
  );

}
