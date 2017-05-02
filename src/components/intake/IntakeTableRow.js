import RaisedButton from 'material-ui/RaisedButton';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {intakePath} from '../../api/apiBase';

class IntakeTableRow extends React.Component {

  render() {
    const intake = this.props.intake;
    return (
      <TableRow>
        <TableRowColumn width={20}>{intake.consumer && intake.consumer.firstName}</TableRowColumn>
        <TableRowColumn width={20}>{intake.consumer && intake.consumer.lastName}</TableRowColumn>
        <TableRowColumn width={20}>{moment(intake.createdAt).format('MMM Do YY')}</TableRowColumn>
        <TableRowColumn width={10}>{intake.score}</TableRowColumn>
        <TableRowColumn width={10}>{intake.complete + ''}</TableRowColumn>
        <TableRowColumn width={10}>
          <RaisedButton
            label="delete"
            secondary={true}
          />
        </TableRowColumn>
        <TableRowColumn width={10}>
          <RaisedButton
            label="edit"
            primary={true}
            href={intakePath + intake.id}
          />
        </TableRowColumn>
      </TableRow>
    );
  }
}

IntakeTableRow.propTypes = {
  intake: PropTypes.object.isRequired
};

export default IntakeTableRow;
