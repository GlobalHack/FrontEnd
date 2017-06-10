import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import PropTypes from 'prop-types';
import React from 'react';
import QuestionSetTableRow from './QuestionSetTableRow';

const QuestionSetTable = (props) => {
  return (
    <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Owner</TableHeaderColumn>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn></TableHeaderColumn>
        </TableRow>
        </TableHeader>
      <TableBody showRowHover={true} stripedRows={true}>
        {props.questionSets.map(questionSet =>
          <QuestionSetTableRow key={questionSet.id} questionSet={questionSet} deleteQuestionSet={props.deleteQuestionSet}/>
        )}
      </TableBody>
    </Table>
    </div>
  );
};

QuestionSetTable.propTypes = {
  questionSet: PropTypes.array.isRequired
};

export default QuestionSetTable
