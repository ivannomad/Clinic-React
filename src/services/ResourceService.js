import React from 'react';
import axios from "axios";
import AuthService from "./AuthService";
import authHeader from "./AuthHeader";

const API_URL = 'http://localhost:8080/';

const user = AuthService.getCurrentUser();

const resources = {

  getPatientById: () => {
    return axios.get(API_URL + `patients/${user.userId}`, {headers: authHeader()});
  },

  getAllDoctors: () => {
    return axios.get(API_URL + 'doctors');
  }

};

const ResourceService = () => {
  return {
    ...resources,
  }
}

export default ResourceService;