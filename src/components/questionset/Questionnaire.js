import LinearProgress from 'material-ui/LinearProgress';
import Snackbar from 'material-ui/Snackbar';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {SchemaForm} from 'react-schema-form';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/questionSetActions';
import Number from 'react-schema-form/lib/Number';
import Checkbox from 'material-ui/Checkbox';
import {score} from '../../utils/AcuityService';
import {Row, Col} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

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
    let newAnswers    = this.state.answers;
    newAnswers[field] = value;
    this.setState({
      answers: newAnswers
    });

  };

  render() {
    const {questionnaireState, questionSetFormSchema, handleMove} = this.props;
    var mapper                                                    = {
      "boolean": Checkbox,
      "number": Number
    };
    // console.log(questionnaireState);
    return (
      <div>
        <LinearProgress mode="determinate" value={Object.keys(this.state.answers).length}
                        max={questionSetFormSchema.form.length}/>
        <SchemaForm
          schema={questionSetFormSchema.schema}
          form={questionSetFormSchema.form}
          model={questionnaireState}
          onModelChange={this.handleUpdate}
          mapper={mapper}
        />
        <Row>
          <Col xs={12} sm={6}>
            <FlatButton
              label="back to consumer"
              onTouchTap={() => handleMove(0)}
            />
          </Col>
          <Col xs={12} sm={6}>
            <RaisedButton
              label="review and submit"
              primary={true}
              onTouchTap={() => handleMove(2)}
            />
          </Col>
        </Row>
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
  questionnaireState: PropTypes.object.isRequired
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
