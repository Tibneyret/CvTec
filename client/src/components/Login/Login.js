import React from 'react';
import SocialButton from '../SocialButton/SocialButton';
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
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Make Your Resume
            </Typography>
            <div className="Login">
              <SocialButton
              >
                Login with linkedin
              </SocialButton>
            </div>
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