import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { ACTIONS } from '../../Setup';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

class EmployeeInviteForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      message: 'Invite Sent',
      profile: props.auth.getProfile()
    };
    props.auth.on('profile_updated', newProfile => {
      this.setState({ profile: newProfile });
    });
  }

  handleChange = event => {
    console.log('?');
    this.setState({
      invitee: event.target.value,
      message: validateEmail(event.target.value)
        ? 'Invite Sent'
        : 'Invalid Email'
    });
  };

  handleTouchTap = () => {
    this.setState({
      open: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { invitee } = this.state;
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
                fullWidth
                onChange={this.handleChange}
              />
              <RaisedButton
                label="Send Invite"
                primary
                onTouchTap={() => {
                  this.props.actions.INVITE.CREATE(invitee);
                  this.handleTouchTap();
                }}
              />
            </form>
          </Col>
        </Row>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={1000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ACTIONS, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeInviteForm);
