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
import {questionSetUrl} from '../../api/apiBase';
import Snackbar from 'material-ui/Snackbar';


class QuestionSetTablePage extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.actions.loadQuestionSets();
  }

  deleteQuestionSet = (questionSet) => {
    this.props.actions.deleteQuestionSet(questionSet);
  }

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
          <QuestionSetTable questionSets={questionSets} deleteQuestionSet={this.deleteQuestionSet}/>
          <Snackbar
            open={this.state.open}
            message={this.state.snackbar}
            autoHideDuration={3000}
          />
        </Toolbar>
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
