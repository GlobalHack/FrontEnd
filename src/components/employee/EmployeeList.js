import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/employeeActions';

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
            (<ListItem
              key={employee.id}
              primaryText={`${employee.firstName} ${employee.lastName}`}
              secondaryText="Awaiting response"
              rightToggle={
                <RaisedButton
                  label="ReSend"
                  primary
                />
              }
            />),
          )}
        </List>
      </Paper>
    );
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  if (state.employees.length > 0) {
    return {
      employees: state.employees,
    };
  }
  return {
    employees: [{ id: '', nickName: '', firstName: '', lastName: '', email: '', ssn: '' }],
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
