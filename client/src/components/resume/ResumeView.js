import React, { useState, useEffect } from 'react';
import Identity from './identity/Identity';
import ListExperiences from './experiences/ListExperiences';
import ListFormations from './formations/ListFormations';
import { getUser } from '../../services/apiCall';
import Grid from '@material-ui/core/Grid';

function ResumeView() {
  const [user, setUser] = useState(
    {
      basics:{}
    }
  );
  
  useEffect(()=>{
    getUser().then( (response) => {
      setUser(response);
    });
  });

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
  )
}

export default ResumeView;