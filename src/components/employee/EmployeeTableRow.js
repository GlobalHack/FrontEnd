import React from 'react';
import PropTypes from 'prop-types';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class EmployeeTableRow extends React.Component {
  state = {
    value: 1,
    employee: this.props.employee,
    lineThrough: this.props.employee.disabled
  };

  handleChange = (event, index, value) => this.setState({value});

  disable = () => {
    let newEmployeeState      = this.state.employee;
    newEmployeeState.disabled = !this.state.employee.disabled;
    this.setState({
      employee: newEmployeeState
    });
    // console.log(this.props.employee.disabled);
  };

  render() {
    let employee = this.state.employee;
    // console.log(this.state.employee.disabled);
    return (
      <TableRow className={(employee.disabled ? "line-through" : "")}>
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
        <TableRowColumn width={10}><Checkbox onCheck={this.disable}/></TableRowColumn>
      </TableRow>
    );
  }
}

EmployeeTableRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeTableRow;
