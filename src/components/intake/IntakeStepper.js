import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Step, StepButton, Stepper} from 'material-ui/Stepper';
import React from 'react';
import ConsumerForm from '../consumer/ConsumerForm';
import IntakeForm from './IntakeForm';
import WarningIcon from 'material-ui/svg-icons/alert/warning';

const getStyles = () => {
  return {
    root: {},
    content: {
      margin: '0 16px'
    },
    actions: {
      marginTop: 12
    },
    backButton: {
      marginRight: 12
    }
  };
};

class IntakeStepper extends React.Component {

  state = {
    stepIndex: 0,
    visited: [],
    consumerState: {}
  };

  componentWillMount() {
    const {stepIndex, visited} = this.state;
    this.setState({visited: visited.concat(stepIndex)});
  }

  componentWillUpdate(nextProps, nextState) {
    const {stepIndex, visited} = nextState;
    if (visited.indexOf(stepIndex) === -1) {
      this.setState({visited: visited.concat(stepIndex)});
    }
  }

  handleUpdateStepper = (data) => {
    console.log(data);
    this.setState({
      consumerState: data
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <ConsumerForm consumerState={this.state.customerState}
                             onUpdateConsumerForm={this.handleUpdateStepper.bind(this)}/>;
      case 1:
        return <IntakeForm/>;
      case 2:
        return 'This is the bit I really care about!';
      default:
        return <Paper>'Click a step to get started.'</Paper>;
    }
  }

  render() {
    const {stepIndex, visited} = this.state;
    const styles               = getStyles();

    return (
      <div style={styles.root}>
        <Stepper linear={false}>
          <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Customer
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Questionaire
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
            <StepButton onClick={() => this.setState({stepIndex: 2})} icon={<WarningIcon />}>
              Review
            </StepButton>
          </Step>
        </Stepper>
        <div style={styles.content}>
          <div>{this.getStepContent(stepIndex)}</div>
          {stepIndex !== null && (
            <div style={styles.actions}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={styles.backButton}
              />
              <RaisedButton
                label="Next"
                primary={true}
                onTouchTap={this.handleNext}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default IntakeStepper;