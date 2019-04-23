const baseUrl = 'http://zssn-backend-example.herokuapp.com/api';

const getHeaders = {
  headers: new Headers({
    Accept: 'application/json',
  }),
};

const postHeaders = {
  headers: new Headers({
    Accept: 'application/json',
    ContentType: 'application/x-www-form-urlencoded',
  }),
};

const get = url => fetch(url, getHeaders)
  .then(response => response.json())
  .catch(error => error);

const getAll = type => fetch(`${baseUrl}/${type}.json`, getHeaders)
  .then(response => response.json())
  .catch(error => error);

const getReports = () => getAll('report');
const getSurvivors = () => getAll('people');

const postSurvivor = formData => fetch(`${baseUrl}/people.json`, {
  method: 'post',
  headers: postHeaders,
  body: formData,
})
  .then(response => response.json())
  .catch(error => error);

const updateAccount = (formData, id) => fetch(`${baseUrl}/people/${id}.json`, {
  method: 'patch',
  headers: postHeaders,
  body: formData,
})
  .then(response => response.json())
  .catch(error => error);

const reportSurvivor = (formData, id) => fetch(`${baseUrl}/people/${id}/report_infection.json`, {
  method: 'post',
  headers: postHeaders,
  body: formData,
})
  .then(response => response.json())
  .catch(error => error);

const API = {
  get,
  getReports,
  getSurvivors,
  postSurvivor,
  updateAccount,
  reportSurvivor,
};

export default API;
