import React from 'react';
import axios from "axios";

const API_URL = 'http://localhost:8080/';

const resources = {

  getAllDoctors: () => {
    return axios.get(API_URL + 'doctors');
  }

};

const DoctorService = () => {
  return {
    ...resources,
  }
}

export default DoctorService;