import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = {
  headIdentity: {
    background: 'silver',
    writingMode: 'vertical-rl',
    textOrientation: 'upRight',
    color: '#FFF',
    padding: '25px',
    fontWeight: 'Bold'
  },
  nameIdentity: {
    color: 'DarkSlateGray'
  }
};
class Identity extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      identity: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.userIdentity !== prevProps.userIdentity) {
      this.setState({
        identity: this.props.userIdentity
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={1} className={classes.headIdentity}>
            Identity
          </Grid>
          <Grid item xs={11}>
            <h1 className={classes.nameIdentity}>{this.state.identity.name}</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Identity.propTypes = {
  userIdentity: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Identity);