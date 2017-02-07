import React, {Component} from 'react';

class EmployeeRow extends Component {

  render() {
    if (!this.props) return null
    return (
      <tr>
        <td>
          { this.props.organization.name }
        </td>
        <td>
          { this.props.firstName }
        </td>
        <td>
          { this.props.lastName }
        </td>
        <td>
          { this.props.ssn }
        </td>
        <td>
          { this.props.role.title }
        </td>
      </tr>
    );
  }
}

export default EmployeeRow;
