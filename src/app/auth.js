import axios from 'axios';

export const tokenConfig = config => {
  const token = localStorage.getItem('token');

  config.headers = {
    'Content-type': 'application/json',
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

axios.interceptors.request.use(tokenConfig);

export const getToken = uuid => {
  const config = {};
  config.headers = {
    'Content-type': 'application/x-www-form-urlencoded',
  };
  const data = { uuid };

  axios
    .post('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', config, { data })
    .then(response => {
      if (response.data.response.access_token) {
        localStorage.setItem('token', response.data.response.access_token);

        window.location.href = '/jogs';
      }
    })
    .catch(() => {
      alert('Oops! Something went wrong...');
    });
};

export const isTokenValid = async () => {
  axios.get('https://jogtracker.herokuapp.com/api/v1/auth/user').catch(() => {
    localStorage.removeItem('token');
    return false;
  });

  return true;
};
