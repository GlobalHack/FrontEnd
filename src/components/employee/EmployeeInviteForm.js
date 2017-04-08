import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Row, Col} from 'react-flexbox-grid';
import React from 'react';

const EmployeeInviteForm = () => {

  return (
    <div>
      <Row>
        <h1>Invite people to join your organization</h1>
      </Row>
      <Row>
        <Col xs={12}>
          <form>
            <TextField
              hintText="example@cemaritan.com"
              floatingLabelText="Email of person to invite"
              fullWidth={true}
            />
            <TextField
              hintText="Come join me on cemaritan"
              floatingLabelText="Message to add to the invitation"
              fullWidth={true}
            />
            <RaisedButton
              label="Send Invite"
              primary={true}
            />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeInviteForm;
