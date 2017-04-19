//import PageBase from '../base/PageBase';
import Paper from 'material-ui/Paper';
import React from 'react';
import globalStyles from '../../styles';
import IntakeStepper from './IntakeStepper';
import { withRouter } from 'react-router'

class IntakePage extends React.Component {

  state = {
    unsaved: true
  };

  componentDidMount = () => {
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      if (this.state.unsaved)
        return 'You may have unsaved information, are you sure you want to leave this page?'
    })
  };

  saveIntake = () => {
    this.setState({
      unsaved: false
    });
  };

  render() {
    return (
      <Paper style={globalStyles.paper}>
        <IntakeStepper
          onSave={this.saveIntake}
        />
      </Paper>
    )
      ;
  }
}

export default withRouter(IntakePage);
