import { api } from './baseUrl';

const login = async (data) => {
  return await api.post('/users/login', data);
};

const register = async (data) => {
  return await api.post('/users/register', data);
};
const contact = async (data) => {
  return await api.post('/dashboard', data);
};

export const repository = {
  login,
  register,
  contact,
};
