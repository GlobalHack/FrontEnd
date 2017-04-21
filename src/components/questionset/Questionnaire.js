import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SchemaForm} from 'react-schema-form';
import Number from 'react-schema-form/lib/Number';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/questionSetActions';
import {score} from '../../utils/AcuityService';

class Questionnaire extends React.Component {

  state = {
    answers: {}
  };

  componentWillMount() {
    if (!this.props.questionSetFormSchema.form.length) {
      this.props.actions.loadQuestionSetSchema();
    }
  }

  handleRequestClose(reason) {
    if (reason !== 'clickaway') {
      this.setState({
        open: false
      });
    }
  }

  handleUpdate = (field, value) => {
    // console.log(field);
    this.props.onUpdateQuestionnaireForm(field, value);
    let newAnswers = this.state.answers;
    newAnswers[field] = value;
    this.setState({
      answers: newAnswers
    });

  };

  render() {
    const {questionnaireState, questionSetFormSchema, handleMove} = this.props;
    var mapper = {
      "boolean": Checkbox,
      "number" : Number
    };
    // console.log(questionnaireState);
    return (
      <div>
        <LinearProgress mode="determinate" value={Object.keys(this.state.answers).length}
                        max={(questionSetFormSchema.form||[]).length}/>
        <SchemaForm
          schema={questionSetFormSchema.schema}
          form={questionSetFormSchema.form}
          model={questionnaireState}
          onModelChange={this.handleUpdate}
          mapper={mapper}
        />
        <Toolbar style={{marginTop:20}}>
          <ToolbarGroup>
            <FlatButton
              label="back to consumer"
              onTouchTap={() => handleMove(0)}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton
              label="review and submit"
              primary={true}
              onTouchTap={() => handleMove(2)}
            />
          </ToolbarGroup>
        </Toolbar>
        <Snackbar
          open={true}
          message="Acuity Score"
          action={score(questionnaireState) + ''}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

Questionnaire.propTypes = {
  questionSetFormSchema: PropTypes.object.isRequired,
  questionnaireState   : PropTypes.object.isRequired
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