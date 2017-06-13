import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/questionSetActions';
import globalStyles from '../../styles';
import QuestionSetTable from './QuestionSetTable';


class QuestionSetTablePage extends React.Component {
  componentWillMount() {
    this.props.actions.loadQuestionSets();
  }

  deleteQuestionSet = (questionSet) => {
    this.props.actions.deleteQuestionSet(questionSet);
  };

  render() {
    const questionSets = this.props.questionSets;
    return (
      <Paper style={globalStyles.paper}>
        <Toolbar>
          <ToolbarGroup>
            <RaisedButton
              label="Create new"
              primary={true}
              href="/questionsets/new"
            />
          </ToolbarGroup>
        </Toolbar>
        <QuestionSetTable questionSets={questionSets} deleteQuestionSet={this.deleteQuestionSet}/>
      </Paper>
    );
  }
}

QuestionSetTablePage.propTypes = {
  questionSets: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    questionSets: state.questionSets
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSetTablePage)
