//import PageBase from '../base/PageBase';
import Paper from 'material-ui/Paper';
import React from 'react';
import globalStyles from '../../styles';
import IntakeStepper from './IntakeStepper';

class IntakePage extends React.Component {

  render() {
    return (
      <Paper style={globalStyles.paper}>
        <IntakeStepper/>
      </Paper>
    )
      ;
  }
}

export default IntakePage;
