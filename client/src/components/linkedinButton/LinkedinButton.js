import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// load LINKEDIN Library
const IN = window.IN;

const styles = {
  logoutButton: {
    color: '#FFF',
  },

};

class LinkedinButton extends React.Component {
  constructor(props) {
    super(props);

    this.onLoadLogIn = this.onLoadLogIn.bind(this);

    this.state = {
      isAuthenticated: false,
      linkedinUser: null,
    };
  }

  // Handle the successful return from the API call
  onSuccess = (data) => {
    console.log(data);
    this.setState({
      isAuthenticated: true,
      linkedinUser: data
    });
  }

  // Handle an error response from the API call
  onError = (error) => {
    console.log(error);
  }

  // Trigger when click on linkedinButton
  onLoadLogIn = () => {
    if (!this.state.isAuthenticated) {
      IN.Event.on(IN, "auth", this.getProfileData);
    } else {
      IN.User.logout();
      this.setState({
        isAuthenticated: false,
        linkedinUser: null
      });
    }
  }

  // Request linkedin profile
  getProfileData = () => {
    IN.API.Raw("/people/~").result(this.onSuccess).error(this.onError);
  }

  render() {

    const { classes } = this.props;
    return (
      <Button onClick={this.onLoadLogIn} className={classes.logoutButton}>
        <script type="in/Login">Log Out</script>
      </Button >
    );
  }
}

LinkedinButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(LinkedinButton);