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
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 0,
      consumerState:{},
      questionnaireState: {}
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      consumerState: nextProps.intake.consumer || this.state.consumerState,
      questionnaireState: nextProps.intakeQuestionnaire || this.state.questionnaireState
    });
  }

  handleUpdateConsumer = (field, value) => {
    this.props.updateSave(false);
    let newConsumerState = this.state.consumerState;
    newConsumerState[field] = value;
    this.setState({
      consumerState: newConsumerState
    });
    // console.log(this.state.consumerState);
  };

  handleSwitchConsumer = (newConsumerState) => {
    // console.log(newConsumerState);
    // newConsumerState.dateOfBirth = new Date(newConsumerState.dateOfBirth);
    this.setState({
      consumerState: newConsumerState});
  };

  handleUpdateQuestionnaire = (field, value) => {
    // console.log(field);
    this.props.updateSave(false);
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

  handleMove = (i) => {
    this.setState({stepIndex: i});
  };

  getStepContent(stepIndex) {
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
          consumerState={this.state.consumerState}
          questionnaireState={this.state.questionnaireState}
          onUpdateQuestionnaireForm={this.handleUpdateQuestionnaire}
          handleMove={this.handleMove}
        />;
      case 2:
        return <IntakeSummary
          intake={this.props.intake}
          consumerState={this.state.consumerState}
          questionnaireState={this.state.questionnaireState}
          handleMove={this.handleMove}
          saveIntake={this.props.saveIntake}
        />;
      default:
        return <Paper>'Click a step to get started.'</Paper>;
    }
  }

  render() {
    const {stepIndex, consumerState, questionnaireState} = this.state;
    // console.log(questionnaireState);
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