import React from "react";
import AuthService from "../../services/AuthService";

export const PatientCard = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={require("../../assets/images/patient.png")}
                   alt="Patient" className="rounded-circle"
                   width="213"/>
              <div className="mt-3">
                <h4>{currentUser.email}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}