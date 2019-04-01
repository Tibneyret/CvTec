import axios  from 'axios';
import {ENV} from '../config/config';

export const getUser = () => {
  return axios.get(ENV + '/user')
      .then(response => {console.log('mes donnees : ' + response);return response.data.user;})
      .catch(error => console.log('error:'+error));
}
