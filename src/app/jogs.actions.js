import axios from 'axios';

export const loadJogs = async () => {
  const response = await axios
    .get('https://jogtracker.herokuapp.com/api/v1/data/sync')
    .catch(() => {
      window.location.href = '/';
    });

  return response.data.response.jogs;
};

export const postJog = jog => {
  const config = {};
  config.headers = {
    'Content-type': 'application/x-www-form-urlencoded',
  };
  const data = { ...jog };

  axios
    .post('https://jogtracker.herokuapp.com/api/v1/data/jog', config, { data })
    .then(response => {
      alert('Jog has been added successfully!');
    })
    .catch(error => {
      alert('Jog has not been added!');
    });
};
