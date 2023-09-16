import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://backend-eureka.bijit.xyz/',
  // baseURL: 'http://192.168.1.5:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;