import api from '../common/api';

export const getAll = () =>
  api.get('/transactions').then((response) => response.data.transactions);

export const remove = (id) => api.delete(`transactions/${id}`);
