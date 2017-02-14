import React, {Component} from 'react';

class EmployeeRow extends Component {

  render() {
    if (!this.props) return null
    return (
      <tr>
        <td>
          { this.props.organization?this.props.organization.name:"None" }
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
          { this.props.role?this.props.role.title:"None" }
        </td>
      </tr>
    );
  }
}

export default EmployeeRow;
