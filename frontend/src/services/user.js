import api from '../common/api';

export const getUsers = () =>
  api.get('/users').then((response) => response.data);
