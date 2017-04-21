import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/employeeActions';
import PageBase from '../base/PageBase';
import EmployeeTable from './EmployeeTable';

class EmployeeTablePage extends React.Component {
  componentWillMount() {
    this.props.actions.loadEmployees();
  }

  render() {
    const employees = this.props.employees;
    return (
      <PageBase title="Employees"
                navigation="Application / Table Page">
        <EmployeeTable employees={employees}/>
      </PageBase>
    );
  }
}

EmployeeTablePage.propTypes = {
  employees: PropTypes.array.isRequired,
  children: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTablePage);
