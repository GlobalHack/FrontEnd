import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import * as actions from '../../actions/employeeActions';
import RaisedButton from 'material-ui/RaisedButton';

class EmployeeList extends React.Component {
  componentWillMount() {
    this.props.actions.loadEmployees();
  }

  render() {
    const employees = this.props.employees;
    return (
      <Paper>
        <List>
          <Subheader>Employees</Subheader>
          {employees.map(employee =>
            <ListItem
              key={employee.id}
              primaryText={employee.firstName + ' ' + employee.lastName}
              secondaryText="Awaiting response"
              rightToggle={
                <RaisedButton
                  label="ReSend"
                  primary={true}
                />
              }
            />
          )}
        </List>
      </Paper>
    );
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  if (state.employees.length > 0) {
    return {
      employees: state.employees
    };
  } else {
    return {
      employees: [{id: '', nickName: '', firstName: '', lastName: '', email: '', ssn: ''}]
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
