import React, {PropTypes} from 'react';
import EmployeeTableRow from './EmployeeTableRow';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

const EmployeeTable = ({employees}) => {
  return (
    <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Organization</TableHeaderColumn>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover={true} stripedRows={true}>
          {employees.map(employee =>
            <EmployeeTableRow key={employee.id} employee={employee}/>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeeTable;
