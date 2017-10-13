import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ACTIONS, URLS } from '../../Setup';
import globalStyles from '../../styles';
import IntakeTable from './IntakeTable';
import Snackbar from 'material-ui/Snackbar';

class IntakeTablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:
        this.props.route.path === 'updated' &&
        this.props.location.query.ts &&
        Date.now() - this.props.location.query.ts < 1000,
      snackbar: 'Intake Updated',
      intakeId: this.props.params.id
    };
    console.log(this.props.location.query);
  }

  componentWillMount() {
    this.props.actions['INTAKES']['LOAD']();
  }

  deleteIntake = intake => {
    this.props.actions['INTAKES']['DELETE'](intake);
  };

  render() {
    const intakes = this.props.intakes;
    return (
      <Paper style={globalStyles.paper}>
        <Toolbar>
          <ToolbarGroup>
            <RaisedButton label="Create new" primary href="/intakes/new" />
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton
              label="download all intakes"
              primary
              href={`${URLS.INTAKE}csv`}
            />
          </ToolbarGroup>
        </Toolbar>
        <IntakeTable intakes={intakes} deleteIntake={this.deleteIntake} />
        <Snackbar
          open={this.state.open}
          message={this.state.snackbar}
          autoHideDuration={3000}
        />
      </Paper>
    );
  }
}

IntakeTablePage.propTypes = {
  intakes: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    intakes: state.intakes
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ACTIONS, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntakeTablePage);
