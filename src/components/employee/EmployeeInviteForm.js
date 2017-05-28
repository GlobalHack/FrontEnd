import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import InviteApi from '../../api/InviteApi';

class EmployeeInviteForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: props.auth.getProfile()
    };
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile});
    });
  }

  handleChange = (event) => {
    console.log("?");
    this.setState({
      invitee: event.target.value,
    });
  };

  render() {
    const {invitee} = this.state;
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
                onChange={this.handleChange}
              />
              <RaisedButton
                label="Send Invite"
                primary={true}
                onTouchTap={()=>InviteApi.sendInvite(invitee)}
              />
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EmployeeInviteForm;
