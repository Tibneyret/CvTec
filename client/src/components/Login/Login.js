import React from 'react';
import SocialButton from '../SocialButton/SocialButton';
import linkedinConfig from '../../resources/_linkedinConfig';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
    this.state = { isAuthenticated: false, user: null, token: '' };
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailed = this.onFailed.bind(this);
  }

  onSuccess = (response) => {
    const token = response.token.accessToken;
    if (token) {
      this.setState({ isAuthenticated: true, user: response.profile, token: token });
    }
  };

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null });
  };


  onFailed = (error) => {
    alert(error);
  };

  render() {
    const { classes } = this.props;

    let content = this.state.isAuthenticated ?
      (
        <div>
          <div>
            {this.state.user.email}
          </div>
          <div>
            <Button onClick={this.logout}>
              Log out
            </Button>
          </div>
        </div>
      ) :
      (
        <SocialButton
          provider="linkedin"
          appId={linkedinConfig.clientID}
          onLoginSuccess={this.onSuccess}
          onLoginFailure={this.onFailed}
        >
          Login with linkedin
        </SocialButton>
      );

    return (
      <div className={classes.root} >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Make Your Resume
            </Typography>
            <div className="Login">
              {content}
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