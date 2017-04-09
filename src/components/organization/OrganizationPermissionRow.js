import React, {PropTypes} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class OrganizationPermissionRow extends React.Component {
  state = {
    value: 1,
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
        <TableRowColumn width={20}>{organization.createdAt}</TableRowColumn>
        <TableRowColumn width={20}><Checkbox /></TableRowColumn>
      </TableRow>
    );
  }
}

OrganizationPermissionRow.propTypes = {
  organization: PropTypes.object.isRequired
};

export default OrganizationPermissionRow;
