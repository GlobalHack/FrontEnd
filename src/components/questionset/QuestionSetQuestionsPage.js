import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/questionSetActions';
import globalStyles from '../../styles';

class QuestionSetQuestionsPage extends React.Component {
  state = {
    saved: true,
    questionSetId: this.props.params.id
  }

  componentWillMount() {
    if (this.state.questionSetId) {
      this.props.actions.loadQuestionSetSchema(this.state.questionSetId);
    }
  }

  saveQuestionSet = (questionSet) => {
    this.setState({saved: true});
    if (questionSet.id) {
      return this.props.actions.updateQuestionSet(questionSet).then(this.props.actions.loadQuestionSetSchema(questionSet.id));
    } else {
      return this.props.actions.createQuestionSet(questionSet).then(this.props.actions.loadQuestionSetSchema(questionSet.id));
    }
  }

  updateSaveQuestionSet = (saved) => {
    this.setState({
      saved: saved
    });
  };

  render() {
    let { questionSetFormSchema } = this.props;
    console.log(questionSetFormSchema)
    return (
      <Paper style={globalStyles.paper}>

      </Paper>
    )
  }

}

QuestionSetQuestionsPage.propTypes = {
  questionSetFormSchema: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    questionSetFormSchema: state.questionSetFormSchema
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionSetQuestionsPage));
