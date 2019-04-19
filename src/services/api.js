const baseUrl = 'http://zssn-backend-example.herokuapp.com/api';

const init = {
  headers: new Headers({
    Accept: 'application/json',
  }),
};

const get = url => fetch(url, init)
  .then(response => response.json())
  .catch(error => error);

const getAll = type => fetch(`${baseUrl}/${type}.json`, init)
  .then(response => response.json())
  .catch(error => error);

const getReports = () => getAll('report');
const getSurvivors = () => getAll('people');

const API = {
  get,
  getReports,
  getSurvivors,
};

export default API;
