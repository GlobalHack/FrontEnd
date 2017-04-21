import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import PropTypes from 'prop-types';
import React from 'react';
import IntakeTableRow from './IntakeTableRow';

const IntakeTable = ({intakes}) => {
  return (
    <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
            <TableHeaderColumn>Created</TableHeaderColumn>
            <TableHeaderColumn>Score</TableHeaderColumn>
            <TableHeaderColumn>Complete</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover={true} stripedRows={true}>
          {intakes.map(intake =>
            <IntakeTableRow key={intake.id} intake={intake}/>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

IntakeTable.propTypes = {
  intakes: PropTypes.array.isRequired
};

export default IntakeTable;
