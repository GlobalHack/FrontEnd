import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/intakeActions';
import globalStyles from '../../styles';
import IntakeStepper from './IntakeStepper';

class IntakePage extends React.Component {
  state = {
    saved: true,
    intakeId: this.props.params.id,
  };

  componentWillMount() {
    if (this.state.intakeId) {
      this.props.actions.loadIntake(this.state.intakeId);
    }
  }

  componentDidMount = () => {
    // this.props.router.setRouteLeaveHook(this.props.route, () => {
    //   if (!this.state.saved)
    //     return 'You may have unsaved information, are you sure you want to leave this page?';
    // });
  };

  saveIntake = (intake) => {
    this.setState({ saved: true });
    if (intake.id) {
      return this.props.actions.updateIntake(intake).then(this.props.actions.loadIntakes());
    }
    return this.props.actions.createIntake(intake).then(this.props.actions.loadIntakes());
  };

  updateSaveIntake = (saved) => {
    this.setState({
      saved,
    });
  };

  render() {
    // console.log(this.props);
    const { intakeId } = this.state;
    let { intake } = this.props;
    if (!intakeId) { intake = {}; }
    return (
      <Paper style={globalStyles.paper}>
        <IntakeStepper
          updateSave={this.updateSaveIntake}
          intake={intake}
          intakeQuestionnaire={intake.answers}
          saveIntake={this.saveIntake}
        />
      </Paper>
    )
    ;
  }
}

IntakePage.propTypes = {
  intake: PropTypes.object.isRequired,
  intakeQuestionnaire: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    intake: state.intake,
    intakeQuestionnaire: state.intakeQuestionnaire,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IntakePage));
