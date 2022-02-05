import axios from 'axios';
import JwtDecodeService from "./JwtService";

const API_URL = 'http://localhost:8081/api/v1/auth/';

const register = (email, password) => {
    return axios
        .post(API_URL + "register", {
            'username': email,
            'password': password
        });
};

const login = (email, password) => {
  return axios
      .post(API_URL + 'login', { 'username': email, 'password': password })
      .then(res => {
        if (res.data.accessToken) {
          JwtDecodeService.saveUser(res.data.accessToken)
        }
      });
}

const logout = () => {
  localStorage.removeItem('user');
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
}

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;