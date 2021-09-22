import { create } from 'apisauce';
export const api = create({
  baseURL: 'https://accuratebackend.herokuapp.com/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
});
