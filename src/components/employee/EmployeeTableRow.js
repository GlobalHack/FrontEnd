import React, {PropTypes} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const EmployeeTableRow = ({employee}) => {
  return (
    <TableRow>
      <TableRowColumn width={30}>{employee.organization&&employee.organization.name}</TableRowColumn>
      <TableRowColumn width={30}>{employee.firstName}</TableRowColumn>
      <TableRowColumn width={30}>{employee.lastName}</TableRowColumn>
    </TableRow>
  );
};

EmployeeTableRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeTableRow;
