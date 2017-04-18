import LinearProgress from 'material-ui/LinearProgress';
import Snackbar from 'material-ui/Snackbar';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {SchemaForm} from 'react-schema-form';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/questionSetActions';
import RefusableBoolean from '../base/RefusableBoolean';
import RefusableNumber from '../base/RefusableNumber';

class Questionnaire extends React.Component {
  componentWillMount() {
    this.props.actions.loadQuestionSetSchema();
  }

  handleRequestClose(reason) {
    if (reason !== 'clickaway') {
      this.setState({
        open: false
      });
    }
  }

  render() {
    const {questionnaireState, onUpdateQuestionnaireForm, questionSetFormSchema} = this.props;
    var mapper = {
      "boolean": RefusableBoolean,
      "number": RefusableNumber
    };
    console.log(questionSetFormSchema);
    return (
      <div>
        <LinearProgress mode="determinate" value={3} max={45}/>
        <SchemaForm
          schema={questionSetFormSchema.schema}
          form={questionSetFormSchema.form}
          model={questionnaireState}
          onModelChange={onUpdateQuestionnaireForm}
          mapper={mapper}
        />
        <Snackbar
          open={true}
          message="Acuity Score"
          action="12"
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

Questionnaire.propTypes = {
  questionSetFormSchema: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    questionSetFormSchema: state.questionSetFormSchema
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
