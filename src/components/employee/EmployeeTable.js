import React from 'react';
import PropTypes from 'prop-types';
import EmployeeTableRow from './EmployeeTableRow';
import {Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow} from 'material-ui/Table';

const EmployeeTable = ({employees}) => {
  return (
    <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Role</TableHeaderColumn>
            <TableHeaderColumn>Disabled</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover={true} stripedRows={true}>
          {employees.map(employee =>
            <EmployeeTableRow key={employee.id} employee={employee}/>
          )}
        </TableBody>
        <TableFooter adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Role</TableHeaderColumn>
            <TableHeaderColumn>Disabled</TableHeaderColumn>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeeTable;
