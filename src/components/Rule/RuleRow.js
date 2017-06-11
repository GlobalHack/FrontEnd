import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from 'material-ui/DatePicker/DatePicker';

class RuleRow extends React.Component {
  state = {
    value: 1,
    date: new Date(2018,3,6)
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const organization = this.props.organization;
    return (
      <TableRow>
        <TableRowColumn width={20}>{organization.name}</TableRowColumn>
        <TableRowColumn width={20}>{organization.address}</TableRowColumn>
        <TableRowColumn width={20}>
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Full Access"/>
            <MenuItem value={2} primaryText="No Access"/>
            <MenuItem value={3} primaryText="No DV"/>
            <MenuItem value={4} primaryText="No Youth"/>
          </SelectField>
        </TableRowColumn>
        <TableRowColumn width={20}>
          <DatePicker autoOk={true}
                      id="1"
                      defaultDate={this.state.date}/>
        </TableRowColumn>
        <TableRowColumn width={20}><Checkbox /></TableRowColumn>
      </TableRow>
    );
  }
}

RuleRow.propTypes = {
  rule: PropTypes.object.isRequired
};

export default RuleRow;
