import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import PropTypes from 'prop-types';
import React from 'react';
import EmployeeTableRow from './EmployeeTableRow';

class EmployeeTable extends React.Component {
  checkAdmin = () => {
    console.log(this.props.employees);
    return ((this.props.employees.filter(x => x.role === 'Admin') || []).length > 1);
  };

  render() {
    const employees = this.props.employees;
    return (
      <div>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Role</TableHeaderColumn>
              <TableHeaderColumn>Disabled</TableHeaderColumn>
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody showRowHover stripedRows>
            {employees.map(employee =>
              (<EmployeeTableRow
                key={employee.id}
                employee={employee}
                saveEmployee={this.props.saveEmployee}
                deleteEmployee={this.props.deleteEmployee}
                checkAdmin={this.checkAdmin}
              />),
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default EmployeeTable;
