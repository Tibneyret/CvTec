import React from 'react';
import * as user from '../../resources/myProfile.json';
import Identity from './identity/Identity';
import axios from 'axios';
import ListExperiences from './experiences/ListExperiences';
import ListFormations from './formations/ListFormations';
import {ENV} from '../../config/config';
import Grid from '@material-ui/core/Grid';

class ResumeView extends React.Component {

  constructor() {
    super()
    axios.get(ENV + '/user')
    .then(response => console.log(response))
    .catch(error => console.log('error:'+error));
  }
 render() {
   return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Identity userIdentity={user.basics} />
          <ListExperiences userExperiences={user.work} />
          <ListFormations userFormations={user.formation} />
        </Grid>
      </Grid>
    </div>
  );}
}

export default ResumeView;