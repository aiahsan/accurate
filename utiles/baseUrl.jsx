import { create } from 'apisauce';
export const api = create({
  baseURL: 'http://localhost:5000/api/v1/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
});
