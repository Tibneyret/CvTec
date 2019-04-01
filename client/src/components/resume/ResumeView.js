import React from 'react';
import Identity from './identity/Identity';
import ListExperiences from './experiences/ListExperiences';
import ListFormations from './formations/ListFormations';
import { getUser } from '../../services/apiCall';
import Grid from '@material-ui/core/Grid';

class ResumeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        basics: {},
        work: [],
        formation: []
      },
    };
  }
  
  componentDidMount(){
    getUser().then( (response) => {
      this.setState({
        user: response
      });
    })
  }
  
  renderResume() {
      return (
        <div>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Identity userIdentity={this.state.user.basics} />
              <ListExperiences userExperiences={this.state.user.work} />
              <ListFormations userFormations={this.state.user.formation} />
            </Grid>
          </Grid>
        </div>
      )
  }

  render() {
    return this.renderResume();
  }
}

export default ResumeView;