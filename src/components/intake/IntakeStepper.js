import Paper from 'material-ui/Paper';
import {Step, StepButton, Stepper} from 'material-ui/Stepper';
import React from 'react';
import ConsumerSelector from '../consumer/ConsumerSelector';
import Questionnaire from '../questionset/Questionnaire';
import IntakeSummary from './IntakeSummary';

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
    consumerState: {},
    questionnaireState: {}
  };

  handleUpdateConsumer = (field, value) => {
    let newConsumerState = this.state.consumerState;
    newConsumerState[field] = value;
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
    if (value == null){
      delete newQuestionnaireState[field];
    }else{
      newQuestionnaireState[field] = value;
    }
    this.setState({
      questionnaireState: newQuestionnaireState
    });
    // console.log(this.state.questionnaireState);
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
    const {stepIndex, consumerState, questionnaireState} = this.state;
    const styles = getStyles();

    return (
      <div style={styles.root}>
        <Stepper linear={false}>
          <Step completed={'id' in consumerState} active={stepIndex === 0}>
            <StepButton onClick={() => this.handleMove(0)}>
              Consumer
            </StepButton>
          </Step>
          <Step completed={'complete' in questionnaireState} active={stepIndex === 1}>
            <StepButton onClick={() => this.handleMove(1)}>
              Questionaire
            </StepButton>
          </Step>
          <Step completed={'id' in consumerState && 'complete' in questionnaireState} active={stepIndex === 2}>
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