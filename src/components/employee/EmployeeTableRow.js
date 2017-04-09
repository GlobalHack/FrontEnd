import React, {PropTypes} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class EmployeeTableRow extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const employee = this.props.employee;
    return (
      <TableRow>
        <TableRowColumn width={30}>{employee.firstName + ' ' + employee.lastName}</TableRowColumn>
        <TableRowColumn width={30}>{employee.email}</TableRowColumn>
        <TableRowColumn width={20}>
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Admin"/>
            <MenuItem value={2} primaryText="User"/>
          </SelectField></TableRowColumn>
        <TableRowColumn width={10}><Checkbox /></TableRowColumn>
      </TableRow>
    );
  }
}

EmployeeTableRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeTableRow;
