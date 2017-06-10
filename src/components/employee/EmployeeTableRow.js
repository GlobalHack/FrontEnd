import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import PropTypes from 'prop-types';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class EmployeeTableRow extends React.Component {
  state = {
    value: this.props.employee.role,
    employee: this.props.employee,
    lineThrough: this.props.employee.disabled
  };

  handleChange = (event, index, value) => {
    // console.log(this.props.checkAdmin);
    if (value !== "Admin"&&!this.props.checkAdmin()){return;}
    var newEmployee = Object.assign({}, this.state.employee);
    newEmployee.role = value;
    this.setState({value: value, employee: newEmployee});
  };

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
        <TableRowColumn width={20}>{employee.email}</TableRowColumn>
        <TableRowColumn width={20}>
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem key={1} value={"Admin"} primaryText="Admin"/>
            <MenuItem key={2} value={"User"} primaryText="User"/>
          </SelectField></TableRowColumn>
        <TableRowColumn width={10}>
          <Checkbox onCheck={this.disable} defaultChecked={employee.disabled}/>
        </TableRowColumn>
        <TableRowColumn width={10}>
          <RaisedButton
            label="delete"
            secondary={true}
            onTouchTap={() => {this.props.deleteEmployee(employee)}}
          />
        </TableRowColumn>
        <TableRowColumn width={10}>
          <RaisedButton
            label="save"
            primary={true}
            onTouchTap={() => {this.props.saveEmployee(employee)}}
          />
        </TableRowColumn>
      </TableRow>
    );
  }
}

EmployeeTableRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeTableRow;
