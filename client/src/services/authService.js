import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const authService = {
  signin: (credentials) => axios.post(`${API_URL}/auth/signin`, credentials),
  signup: (userData) => axios.post(`${API_URL}/auth/signup`, userData),
  signout: () => Promise.resolve(),
};

export default authService;