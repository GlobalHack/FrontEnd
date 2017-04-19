import RaisedButton from 'material-ui/RaisedButton';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import moment from 'moment';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {intakeUrl} from '../../api/apiBase';

class IntakeTableRow extends React.Component {

  render() {
    const intake = this.props.intake;
    return (
      <TableRow>
        <TableRowColumn width={20}>{intake.consumer && intake.consumer.firstName}</TableRowColumn>
        <TableRowColumn width={20}>{intake.consumer && intake.consumer.lastName}</TableRowColumn>
        <TableRowColumn width={20}>{moment(intake.createdAt).format('MMM Do YY')}</TableRowColumn>
        <TableRowColumn width={20}>{intake.score}</TableRowColumn>
        <TableRowColumn width={10}>{intake.complete + ''}</TableRowColumn>
        <TableRowColumn width={10}>
          <Link to={intakeUrl + '?id=' + intake.id}>
            <RaisedButton
              label="edit"
              primary={true}
            />
          </Link>
        </TableRowColumn>
      </TableRow>
    );
  }
}

IntakeTableRow.propTypes = {
  intake: PropTypes.object.isRequired
};

export default IntakeTableRow;
