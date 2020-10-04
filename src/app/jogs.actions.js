import axios from 'axios';

export const loadJogs = async () => {
  const response = await axios
    .get('https://jogtracker.herokuapp.com/api/v1/data/sync')
    .catch(() => {
      window.location.href = '/';
    });

  return response.data.response.jogs;
};
