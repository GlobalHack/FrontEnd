import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import PropTypes from 'prop-types';
import React from 'react';
import EmployeeTableRow from './EmployeeTableRow';

const EmployeeTable = (props) => {
  return (
    <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Role</TableHeaderColumn>
            <TableHeaderColumn>Disabled</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover={true} stripedRows={true}>
          {props.employees.map(employee =>
            <EmployeeTableRow key={employee.id} employee={employee} saveEmployee={props.saveEmployee} deleteEmployee={props.deleteEmployee}/>
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
