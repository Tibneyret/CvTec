import React from 'react';
import * as user from '../../resources/myProfile.json';
import Identity from './identity/Identity';
import Grid from '@material-ui/core/Grid';

const ResumeView = () => {
  console.log(user);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Identity userIdentity={user.basics} />
      </Grid>
    </Grid>
  );
};

export default ResumeView;