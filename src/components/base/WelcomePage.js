import Paper from 'material-ui/Paper';
import React from 'react';
import globalStyles from '../../styles';
import OrganizationForm from '../organization/OrganizationForm';
import EmployeeInviteForm from '../employee/EmployeeInviteForm';
import EmployeeList from '../employee/EmployeeList';
import {Row, Col} from 'react-flexbox-grid';

class WelcomePage extends React.Component {

  render() {
    return (
      <Paper style={globalStyles.paper}>
        {/*<OrganizationForm/>*/}

        <Row>
          <Col xs={12} sm={6}>
            <EmployeeInviteForm/>
          </Col>
          <Col xs={12} sm={6}>
            <EmployeeList/>
          </Col>
        </Row>
      </Paper>
    )
      ;
  }
}

export default WelcomePage;
