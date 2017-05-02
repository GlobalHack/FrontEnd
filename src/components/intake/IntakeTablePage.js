import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/intakeActions';
import globalStyles from '../../styles';
import IntakeTable from './IntakeTable';

class IntakeTablePage extends React.Component {
  componentWillMount() {
    this.props.actions.loadIntakes();
  }

  render() {
    const intakes = this.props.intakes;
    return (
      <Paper style={globalStyles.paper}>
        <Toolbar>
          <ToolbarGroup>
            <RaisedButton
              label="Create new"
              primary={true}
              href="/intakes/new"
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton
              label="download all intakes"
              primary={true}
            />
          </ToolbarGroup>
        </Toolbar>
        <IntakeTable intakes={intakes}/>
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
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(IntakeTablePage);
