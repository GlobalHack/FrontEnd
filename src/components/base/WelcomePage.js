import Paper from 'material-ui/Paper';
import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import EmployeeInviteForm from '../employee/EmployeeInviteForm';
import OrganizationForm from '../organization/OrganizationForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

function Welcome({organization}){
  if (!organization.id){
    return(
      <Row>
        <Col xs={12} sm={6}>
          <OrganizationForm/>
        </Col>
      </Row>
    )
  } else {
    return (
      <Row>
        <Col xs={12} sm={12}>
          <h1 style={{textAlign:"center"}}>Your Organization: {organization.name}</h1>
        </Col>
        <Col xs={12} sm={6}>
          <EmployeeInviteForm/>
        </Col>
      </Row>
    )
  }
}

class WelcomePage extends React.Component {

  render() {
    return (
      <Paper style={globalStyles.paper}>
        <Welcome organization={this.props.organization}/>
      </Paper>
    );
  }
}

WelcomePage.propTypes = {
  employee: PropTypes.object.isRequired,
  organization: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    employee: state.employee,
    organization: state.organization
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
