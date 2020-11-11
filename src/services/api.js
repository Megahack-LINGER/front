import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-3-22-9-46.us-east-2.compute.amazonaws.com:4200/nlw',
});

export default api;

