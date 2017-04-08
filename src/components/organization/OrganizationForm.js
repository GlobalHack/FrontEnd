import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Row, Col} from 'react-flexbox-grid';
import React from 'react';

const OrganizationForm = () => {

  return (
    <div>
      <Row>
        <h1>It looks like you don't belong to an organization yet</h1>
      </Row>
      <Row>
        <Col xs={12} sm={5}>
          <form>
            <TextField
              hintText="Organization"
              floatingLabelText="Search for Organization"
              fullWidth={true}
            />
            <RaisedButton
              label="Request Access"
              primary={true}
            />
          </form>
        </Col>
        <Col xs={12} sm={1}>
          <h1>-Or-</h1>
        </Col>
        <Col xs={12} sm={6}>
          <form>
            <TextField
              hintText="Organization"
              floatingLabelText="Organization Name"
              fullWidth={true}
            />
            <TextField
              hintText="Address"
              floatingLabelText="Address"
              fullWidth={true}
            />
            <RaisedButton
              label="Create"
              primary={true}
            />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default OrganizationForm;
