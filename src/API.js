const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const URL = 'http://localhost:3000/api';

function GET_NEWS(subject) {
  return fetch(`${URL}/${subject}`, params)
    .then((response) => response.json())
    .catch((err) => console.log('Error:', err));
}

function GET_NEWS_BY_ID(subject, id) {
  return fetch(`${URL}/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch((err) => console.log('Error:', err));
}

export default {
  GET_NEWS,
  GET_NEWS_BY_ID,
};
