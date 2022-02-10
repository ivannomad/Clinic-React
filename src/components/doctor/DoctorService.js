import React from 'react';
import axios from "axios";
import AuthService from "../../services/AuthService";
import authHeader from "../../services/AuthHeader";

const API_URL = 'http://localhost:8080/doctors';
const user = AuthService.getCurrentUser();

const resources = {

  getAllDoctors: () => {
    return axios.get(API_URL);
  },

  getDoctorById: () => {
    return axios.get(
        API_URL + `/${user.userId}`,
        {headers: authHeader()}
    )
  },

  createDoctorAppointment: (dateAndTime) => {
    return axios.post(
        API_URL + `/${user.userId}/appointments`,
        {"dateAndTime": dateAndTime},
        {headers: authHeader()}
    )
  },

  getFreeDoctorAppointments: () => {
    return axios.get(
        API_URL + `/${user.userId}/appointments`,
        {
          params: {free: true},
          headers: authHeader()
        }
    )
  },

  getBusyDoctorAppointments: () => {
    return axios.get(
        API_URL + `/${user.userId}/appointments`,
        {
          params: {free: false},
          headers: authHeader()
        }
    )
  }

};

const DoctorService = () => {
  return {
    ...resources,
  }
}

export default DoctorService;