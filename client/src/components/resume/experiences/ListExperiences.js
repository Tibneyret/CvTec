import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const color1 = 'black',
  color2 = 'white',
  color3 = '#a83279';

export const styles = {
  headExperiences: {
    background: '#cfe0e8',
    writingMode: 'vertical-rl',
    textOrientation: 'upRight',
    color: '#87bdd8',
    padding: '25px',
    fontWeight: 'Bold'
  },
  timeline: {
    position: 'relative',
    maxWidth: '100em',
    '&:before': {
      backgroundColor: color1,
      content: "''",
      marginLeft: '-1px',
      position: 'absolute',
      top: 0,
      width: '2px',
      height: '100%',
    },
    '& h3': {
      fontSize: '1.75em',
      color: '#87bdd8'
    },
    '& h4': {
      fontSize: '1.2em',
      color: '#b7d7e8',
      marginBottom: '1.2em'
    },
  },
  timelineEvent: {
    listStyleType: 'none',
    position: 'relative',
    '&:hover': {
      '& label': {
        transform: 'rotate(-45deg)',
        backgroundColor: color3,
      },
      '& h5': {
        boxShadow: `inset 40em 0 0 0 ${color3}`,
      },
    },
  },
  timelineEventIcon: {
    transition: 'transform 0.2s ease-in',
    transform: 'rotate(45deg)',
    backgroundColor: 'black',
    outline: `10px solid ${color2}`,
    display: 'block',
    margin: '0.5em 0.5em 0.5em -0.5em',
    position: 'absolute',
    top: 0,
    width: '1em',
    height: '1em',
  },
  timelineEventThumbnail: {
    transition: '0.5s ease-in 0.1s',
    color: 'white',
    fontSize: '0.75em',
    backgroundColor: color1,
    boxShadow: 'inset 0 0 0 0em #ef795a',
    display: 'inline-block',
    marginBottom: '1.2em',
    padding: '0.25em 1em 0.2em 1em',
  },
  timelineEventCopy: {
    padding: '2em',
    position: 'relative',
    top: '-1.875em',
    left: '4em',
  },
  container: {
    boxSizing: 'border-box',
  }
};

class ListExperiences extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      experiences: []
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userExperiences !== prevProps.userExperiences) {
      this.setState({
        experiences: this.props.userExperiences
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container className={classes.container} spacing={0}>
          <Grid item xs={1} className={classes.headExperiences}>
            Professional experiences
          </Grid>
          <Grid item xs={11}>
            {this.state.experiences.map((exp, key) =>
              <ul key={key} className={classes.timeline}>
                <li className={classes.timelineEvent}>
                  <label className={classes.timelineEventIcon}/>
                  <div className={classes.timelineEventCopy}>
                    <h5 className={classes.timelineEventThumbnail}>
                      {/* todo : afficher correctement les dates, et faire une fonction pour quand il n'y a pas de date => afficher 'aujourd'hui' */}
                      {exp.startDate} {exp.endDate ? 'to ' + exp.endDate : ''}
                    </h5>
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                    <p>{exp.summary}</p>
                  </div>
                </li>
              </ul>)}
          </Grid>
        </Grid>
      </div>
    );
  }
}

ListExperiences.propTypes = {
  userExperiences: PropTypes.array,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListExperiences);