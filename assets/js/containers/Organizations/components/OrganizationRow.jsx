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
      </tr>
    );
  }
}

export default OrganizationRow;
