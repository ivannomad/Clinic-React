import axios from 'axios';
import authHeader from "./AuthHeader";

const API_URL = 'http://localhost:8080/';

const getPatientBoard = () => {
  return axios.get(API_URL + 'patients', { headers: authHeader() });
};

const getDoctorBoard = () => {
  return axios.get(API_URL + 'doctors', { headers: authHeader() });
};

export default {
  getDoctorBoard,
  getPatientBoard,
};