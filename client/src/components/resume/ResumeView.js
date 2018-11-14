import React from 'react';
import * as profil from '../../resources/myProfile.json';
import Login from '../Login/Login';
import Grid from '@material-ui/core/Grid';

const ResumeView = () => {
  console.log(profil);
  return (
    <div>
      <Login />
      <Grid container spacing={0}>
        <Grid item xs={1}>
          Identity
        </Grid>
        <Grid item xs={11}>
          <h1>{profil.basics.name}</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeView;