import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://eureka-2025-12b0e27f8a5f.herokuapp.com/',
  // baseURL: 'http://192.168.1.5:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;