import React from 'react';
import LinkedinButton from '../linkedinButton/LinkedinButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

class Login extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Make Your Resume
            </Typography>
            <LinkedinButton />
          </Toolbar>
        </AppBar >
      </div >
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);