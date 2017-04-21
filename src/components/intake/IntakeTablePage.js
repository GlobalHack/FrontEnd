import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/intakeActions';
import IntakeTable from './IntakeTable';
import globalStyles from '../../styles';

class IntakeTablePage extends React.Component {
  componentWillMount() {
    this.props.actions.loadIntakes();
  }

  render() {
    const intakes = this.props.intakes;
    return (
      <Paper style={globalStyles.paper}>
        <Link to="/intakes/new">
          <RaisedButton
            label="Create new"
            primary={true}
          />
        </Link>
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