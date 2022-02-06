import React, {useEffect, useState} from 'react';

import UserService from "../services/UserService";
import AuthService from "../services/AuthService";

export const BoardPatient = () => {
  const currentUser = AuthService.getCurrentUser();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");

  useEffect(async () => {
        await UserService.getPatientBoard()
            .then(res => {
              setFirstName(res.data.firstName);
              setSecondName(res.data.secondName);
              setContactNumber(res.data.contactNumber);
              setBirthDate(res.data.birthDate);
            })
            .catch(error => {
                  console.log(error)
                }
            );
      }, []
  );

  return (
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://cdn.icon-icons.com/icons2/2265/PNG/512/patient_coronavirus_icon_140453.png"
                         alt="Admin" className="rounded-circle"
                         width="150"/>
                    <div className="mt-3">
                      <h4>{firstName + " " + secondName}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {currentUser.email}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {contactNumber}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Birth Date</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {birthDate}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info " target="__blank"
                         href="//www.google.com.ua">Edit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};