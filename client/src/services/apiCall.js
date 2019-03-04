import axios  from 'axios';
import {ENV} from '../config/config';

export const getUser = () => {
  axios.get(ENV + '/user')
      .then(response => {return response.data.user;})
      .catch(error => console.log('error:'+error));
}
