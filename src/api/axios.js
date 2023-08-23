import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://192.168.43.28:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;