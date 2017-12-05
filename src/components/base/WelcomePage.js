import Paper from 'material-ui/Paper';
import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { styles } from '../../styles';
import EmployeeInviteForm from '../employee/EmployeeInviteForm';
import OrganizationForm from '../organization/OrganizationForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

function Welcome({ organization, auth }) {
  if (!organization.id) {
    return (
      <Row>
        <Col xs={12} sm={6}>
          <OrganizationForm />
        </Col>
      </Row>
    );
  }
  return (
    <Row>
      <Col xs={12} sm={12}>
        <h1 style={{ textAlign: 'center' }}>
          Your Organization: {organization.name}
        </h1>
      </Col>
      <Col xs={12} sm={6}>
        <EmployeeInviteForm auth={auth} />
      </Col>
    </Row>
  );
}

class WelcomePage extends React.Component {
  render() {
    const { auth } = this.props;
    return (
      <Paper style={styles.paper}>
        <Welcome organization={this.props.organization} auth={auth} />
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
    employee: state.employee || {},
    organization: state.organization || {}
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({}, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
