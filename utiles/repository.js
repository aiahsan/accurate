import { api } from './baseUrl';

 
const contact = async (data) => {
   return await api.post('/dashboard', data);
};

export const repository = {
 
  contact,
};
