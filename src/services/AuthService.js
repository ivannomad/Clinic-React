import axios from 'axios';

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
        .post(API_URL + 'login', {'username': email, 'password': password})
        .then(res => {
            localStorage.setItem('accessToken', res.data.accessToken);
            console.log(res.data.accessToken);
            console.log(res);
        })
        .catch(error => console.log(error));
}

const logout = () => {
    localStorage.removeItem('user');
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

const authService = {
    login,
    logout,
    getCurrentUser,
    register
};

export default authService;