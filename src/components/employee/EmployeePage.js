import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { ACTIONS } from '../../Setup';
import PageBase from '../base/PageBase';
import EmployeeTable from './EmployeeTable';

class EmployeePage extends React.Component {
  componentDidMount() {
    //loademployee ({id: this.props.params.id})
  }

  render() {
    const { employee, consumers, intakes, organization } = this.props;
    return (
      <PageBase
        title={`Employee ${employee.name || 'Loading...'}`}
        navigation="Application / Employee Page"
      >
        <ConsumerList consumers={consumers} />
        <IntakeList intakes={intakes} />
        <OrganizationCard organization={organization} />
      </PageBase>
    );
  }
}

EmployeeTablePage.propTypes = {
  employee: PropTypes.object.isRequired,
  consumers: PropTypes.array,
  intakes: PropTypes.array,
  organization: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    employee: state.employee.information,
    consumers: state.employee.consumers,
    intakes: state.employee.intakes,
    organization: state.employee.organization
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ACTIONS, dispatch) };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EmployeeTablePage)
);
