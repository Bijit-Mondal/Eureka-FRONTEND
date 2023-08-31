import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://backend-eureka.bijit.xyz/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;