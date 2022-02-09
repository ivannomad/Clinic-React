import React, {useEffect, useState} from 'react';
import AuthService from "../services/AuthService";
import ResourceService from "../services/ResourceService";
import {Button} from "react-bootstrap";
import axios from "axios";
import authHeader from "../services/AuthHeader";

export const BoardPatient = () => {
  const currentUser = AuthService.getCurrentUser();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [newContactNumber, setNewContactNumber] = useState("");

  useEffect(async () => {
        await ResourceService().getPatientById()
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

  const handleEditModeTrue = e => {
    e.preventDefault();
    setEditMode(true)
  };

  const handleEditModeFalse = async e => {
    e.preventDefault();
    await axios
        .put("http://localhost:8080/patients/" + AuthService.getCurrentUser().userId, {
          'id': AuthService.getCurrentUser().userId,
          'firstName': firstName,
          'secondName': secondName,
          'contactNumber': newContactNumber ? newContactNumber : contactNumber,
          'birthDate': birthDate,
        }, {headers: authHeader()})
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
    setNewContactNumber("")
    setEditMode(false)
  };

  return (
      <div className="container">
        <div className="main-body mt-3">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://cdn.icon-icons.com/icons2/2265/PNG/512/patient_coronavirus_icon_140453.png"
                         alt="Patient" className="rounded-circle"
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
                    {editMode ? (
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control"
                                 value={newContactNumber ? newContactNumber : contactNumber}
                                 onChange={event => setNewContactNumber(event.target.value)}/>
                        </div>
                    ) : (
                        <div className="col-sm-9 text-secondary">
                          {contactNumber}
                        </div>
                    )}
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
                      {editMode ? (
                          <Button variant="success" onClick={handleEditModeFalse}>
                            Save changes
                          </Button>
                      ) : (
                          <Button onClick={handleEditModeTrue}>
                            Edit
                          </Button>)}
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