import React, {PropTypes} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

class IntakeTableRow extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const intake = this.props.intake;
    return (
      <TableRow>
        <TableRowColumn width={20}>{intake.consumer && intake.consumer.firstName}</TableRowColumn>
        <TableRowColumn width={20}>{intake.consumer && intake.consumer.lastName}</TableRowColumn>
        <TableRowColumn width={20}>{intake.createdAt}</TableRowColumn>
        <TableRowColumn width={20}>{intake.score}</TableRowColumn>
        <TableRowColumn width={10}>{intake.complete+''}</TableRowColumn>
        <TableRowColumn width={10}>
          <RaisedButton
            label="edit"
            primary={true}
            onTouchTap={() => this.handleChange(2)}
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
