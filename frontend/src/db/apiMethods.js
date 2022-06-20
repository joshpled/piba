import axios from 'axios';
const baseURL = 'http://localhost:8000';

export const newDog = (data) => {
  axios
    .post(baseURL + '/api/dogs', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      debugger;
    })
    .catch(function (error) {
      return alert(error.response.data.message);
    });
};
