import axios from 'axios';

const burl = "http://127.0.0.1:3000"

export default {
  login: function () {
    return axios.get(burl + '/auth/linkedin')
  },
  isAuth: function () {
    return (localStorage.getItem('token') !== null);
  }
}
