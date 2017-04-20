import Paper from 'material-ui/Paper';
import {Step, StepButton, Stepper} from 'material-ui/Stepper';
import React from 'react';
import ConsumerSelector from '../consumer/ConsumerSelector';
import Questionnaire from '../questionset/Questionnaire';
import IntakeSummary from './IntakeSummary';

const getStyles = () => {
  return {
    root      : {},
    content   : {
      margin: '0 16px'
    },
    actions   : {
      marginTop: 12
    },
    backButton: {
      marginRight: 12
    }
  };
};

class IntakeStepper extends React.Component {

  state = {
    stepIndex         : 0,
    visited           : [],
    consumerState     : {},
    questionnaireState: {}
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

  handleUpdateConsumer = (field, value) => {
    // console.log(field);
    // console.log(typeof(value));
    let newConsumerState = this.state.consumerState;
    newConsumerState[field] = value;
    // console.log(newConsumerState);
    // newConsumerState.dateOfBirth = new Date(newConsumerState.dateOfBirth);
    this.setState({
      consumerState: newConsumerState
    });
  };

  handleSwitchConsumer = (newConsumerState) => {
    // console.log(newConsumerState);
    // newConsumerState.dateOfBirth = new Date(newConsumerState.dateOfBirth);
    this.setState({
      consumerState: newConsumerState
    });
  };

  handleUpdateQuestionnaire = (field, value) => {
    let newQuestionnaireState = this.state.questionnaireState;
    newQuestionnaireState[field] = value;
    this.setState({
      questionnaireState: newQuestionnaireState
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

  handleMove = (i) => {
    this.setState({stepIndex: i});
  };

  getStepContent(stepIndex) {
    // console.log(this.state.questionnaireState);
    switch (stepIndex) {
      case 0:
        return <ConsumerSelector
          consumerState={this.state.consumerState}
          onUpdateConsumerForm={this.handleUpdateConsumer}
          onSwitchConsumerForm={this.handleSwitchConsumer}
          handleMove={this.handleMove}
        />;
      case 1:
        return <Questionnaire
          questionnaireState={this.state.questionnaireState}
          onUpdateQuestionnaireForm={this.handleUpdateQuestionnaire}
          handleMove={this.handleMove}
        />;
      case 2:
        return <IntakeSummary
          consumerState={this.state.consumerState}
          questionnaireState={this.state.questionnaireState}
          handleMove={this.handleMove}
        />;
      default:
        return <Paper>'Click a step to get started.'</Paper>;
    }
  }

  render() {
    const {stepIndex, visited} = this.state;
    const styles = getStyles();

    return (
      <div style={styles.root}>
        <Stepper linear={false}>
          <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
            <StepButton onClick={() => this.handleMove(0)}>
              Consumer
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
            <StepButton onClick={() => this.handleMove(1)}>
              Questionaire
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
            <StepButton onClick={() => this.handleMove(2)}>
              Review
            </StepButton>
          </Step>
        </Stepper>
        <div style={styles.content}>
          <div>{this.getStepContent(stepIndex)}</div>
        </div>
      </div>
    );
  }
}

export default IntakeStepper;