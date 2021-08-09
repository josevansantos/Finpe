import api from '../common/api';

export const getUser = (id) => {
  api.get(`users/${id}`).then((response) => response.data.transactions);
};
