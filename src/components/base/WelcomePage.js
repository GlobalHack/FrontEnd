import Paper from 'material-ui/Paper';
import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import EmployeeInviteForm from '../employee/EmployeeInviteForm';
import OrganizationForm from '../organization/OrganizationForm';

class WelcomePage extends React.Component {

  render() {
    return (
      <Paper style={globalStyles.paper}>
        <OrganizationForm/>
        <Row>
          <Col xs={12} sm={6}>
            <EmployeeInviteForm/>
          </Col>
        </Row>
      </Paper>
    );
  }
}

export default WelcomePage;
