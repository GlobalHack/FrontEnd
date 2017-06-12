import RaisedButton from 'material-ui/RaisedButton'
import {TableRow, TableRowColumn} from 'material-ui/Table'
import PropTypes from 'prop-types'
import React from 'react';
import {questionSetPath} from '../../api/apiBase'

class QuestionSetTableRow extends React.Component {

  render(){
    const questionSet = this.props.questionSet;
    return (
      <TableRow>
        <TableRowColumn width={20}>{questionSet.title}</TableRowColumn>
        <TableRowColumn width={20}>{(questionSet.organization&&questionSet.organization.name) || 'Cemartian'}</TableRowColumn>
        <TableRowColumn width={10}>
          <RaisedButton
            label="delete"
            secondary={true}
            onTouchTap={() => this.props.deleteQuestionSet(questionSet)}
          />
        </TableRowColumn>
        <TableRowColumn width={10}>
          <RaisedButton
            label="edit"
            primary={true}
            href={questionSetPath + questionSet.id}
          />
        </TableRowColumn>
      </TableRow>
    );
  }
}

QuestionSetTableRow.propTypes = {
  questionSet: PropTypes.object.isRequired
};

export default QuestionSetTableRow;
