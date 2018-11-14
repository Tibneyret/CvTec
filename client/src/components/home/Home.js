import React from 'react';
import Login from '../Login/Login';
import ResumeView from '../resume/ResumeView';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Login />
        </Grid>
        <Grid item xs={12}>
          <ResumeView />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;