import axios from 'axios';
import authHeader from "./AuthHeader";
import AuthService from "./AuthService";

const API_URL = 'http://localhost:8080/';

const getPatientBoard = () => {
  return axios.get(API_URL + 'patients/' + AuthService.getCurrentUser().userId, {headers: authHeader()});
};

const getDoctorBoard = () => {
  return axios.get(API_URL + 'doctors', {headers: authHeader()});
};

export default {
  getDoctorBoard,
  getPatientBoard,
};