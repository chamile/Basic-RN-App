import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://stage-api.serw.io/v1',
});

export default instance;
