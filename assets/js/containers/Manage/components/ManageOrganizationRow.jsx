import React, {Component} from 'react';

class OrganizationRow extends Component {

  render() {
    if (!this.props) return null
    return (
      <tr>
        <td>
          { this.props.name }
        </td>
        <td>
          { this.props.address }
        </td>
        <td>
          <select><option>full access</option><option>no access</option><option>no dv access</option><option>no youth access</option></select>
        </td>
        <td>
          { this.props.createdAt }
        </td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    );
  }
}

export default OrganizationRow;
