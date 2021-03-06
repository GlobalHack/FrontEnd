import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { SchemaForm } from 'react-schema-form';
import { bindActionCreators } from 'redux';
import { ACTIONS } from '../../Setup';
import { score } from '../../utils/AcuityService';
import RefusableBoolean from '../base/RefusableBoolean';
import RefusableNumber from '../base/RefusableNumber';
import RefusableSelect from '../base/RefusableSelect';

class Questionnaire extends React.Component {
  state = {
    answers: {}
  };

  componentWillMount() {
    if (!this.props.questionSetFormSchema.form.length) {
      this.props.actions.loadQuestionSetSchema();
    }
    // if (this.props.consumerState.dateOfBirth){
    //   console.log(new Date().getFullYear()-new Date(this.props.consumerState.dateOfBirth).getFullYear()+'');
    //   this.handleUpdate("General_1", new Date().getFullYear()-new Date(this.props.consumerState.dateOfBirth).getFullYear()+'');
    // }
  }

  handleRequestClose(reason) {
    if (reason !== 'clickaway') {
      this.setState({
        open: false
      });
    }
  }

  handleUpdate = (field, value) => {
    this.props.onUpdateQuestionnaireForm(field, value);
    this.setState({ answers: this.props.questionnaireState });
    if (
      Object.keys(this.props.questionnaireState).length >=
      (this.props.questionSetFormSchema.form || []).length
    ) {
      this.props.onUpdateQuestionnaireForm('complete', true);
    }
  };

  render() {
    const {
      questionnaireState,
      questionSetFormSchema,
      handleMove
    } = this.props;
    const mapper = {
      RefusableBoolean,
      RefusableNumber,
      RefusableSelect
    };
    // console.log(questionnaireState);
    return (
      <div>
        <LinearProgress
          mode="determinate"
          value={Object.keys(questionnaireState).length}
          max={(questionSetFormSchema.form || []).length}
        />
        <SchemaForm
          schema={questionSetFormSchema.schema}
          form={questionSetFormSchema.form}
          model={questionnaireState}
          onModelChange={this.handleUpdate}
          mapper={mapper}
        />
        <Toolbar style={{ marginTop: 20 }}>
          <ToolbarGroup>
            <FlatButton
              label="back to consumer"
              onTouchTap={() => handleMove(0)}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton
              label="review and submit"
              primary
              onTouchTap={() => handleMove(2)}
            />
          </ToolbarGroup>
        </Toolbar>
        <Snackbar
          open
          message="Acuity Score"
          action={`${score(questionnaireState)}`}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

Questionnaire.propTypes = {
  questionSetFormSchema: PropTypes.object.isRequired,
  questionnaireState: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    questionSetFormSchema: state.questionSetFormSchema
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ACTIONS, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
