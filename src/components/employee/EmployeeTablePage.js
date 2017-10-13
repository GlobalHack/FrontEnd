import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ACTIONS } from '../../Setup';
import PageBase from '../base/PageBase';
import EmployeeTable from './EmployeeTable';

class EmployeeTablePage extends React.Component {
  componentWillMount() {
    this.props.actions.loadEmployees();
  }

  render() {
    const employees = this.props.employees;
    return (
      <PageBase title="Employees" navigation="Application / Table Page">
        <EmployeeTable
          employees={employees}
          saveEmployee={this.props.actions['EMPLOYEE']['UPDATE']}
          deleteEmployee={this.props.actions['EMPLOYEE']['DELETE']}
        />
      </PageBase>
    );
  }
}

EmployeeTablePage.propTypes = {
  employees: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    employees: state.employees
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ACTIONS, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTablePage);
