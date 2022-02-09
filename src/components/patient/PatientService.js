import React from 'react';
import axios from "axios";
import AuthService from "../../services/AuthService";
import authHeader from "../../services/AuthHeader";

const API_URL = 'http://localhost:8080/';

const user = AuthService.getCurrentUser();

const getPatientById = () => {
  return axios.get(
      API_URL + `patients/${user.userId}`,
      {headers: authHeader()});
}

const updatePatientById = (firstName, secondName, contactNumber, birthDate) => {
  return axios.put(
      API_URL + `patients/${user.userId}`,
      {
        'id': user.userId,
        'firstName': firstName,
        'secondName': secondName,
        'contactNumber': contactNumber,
        'birthDate': birthDate,
      },
      {headers: authHeader()});
}

const getPatientAppointments = () => {
  return axios.get(
      API_URL + `patients/${user.userId}/appointments`,
      {headers: authHeader()})
}

const cancelPatientAppointment = (appId) => {
  return axios.delete(
      API_URL + `patients/${user.userId}/appointments/${appId}/cancel`,
      {headers: authHeader()})
}

const PatientService = {
  getPatientById,
  updatePatientById,
  getPatientAppointments,
  cancelPatientAppointment
}

export default PatientService;