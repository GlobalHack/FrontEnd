import React, {Component} from 'react';

class EmployeeRow extends Component {

  render() {
    if (!this.props) return null
    return (
      <tr>
        <td>
          { this.props.firstName } { this.props.lastName }
        </td>
        <td>
          { this.props.email }
        </td>
        <td>
          <select><option>Admin</option><option>user</option></select>
        </td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    );
  }
}

export default EmployeeRow;
