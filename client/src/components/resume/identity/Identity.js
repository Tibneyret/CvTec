import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const Identity = (props) => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={1}>
          Identity
        </Grid>
        <Grid item xs={11}>
          <h1>{props.userIdentity.name}</h1>
        </Grid>
      </Grid>
    </div>
  );
};

Identity.propTypes = {
  userIdentity: PropTypes.object.isRequired,
};

export default Identity;