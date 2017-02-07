import React, {Component} from 'react';

class CustomerRow extends Component {

  render() {
    if (!this.props) return null
    return (
      <tr>
        <td>
          { this.props.uuid }
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
          { String(this.props.domesticViolence) }
        </td>
        <td>
          { String(this.props.youth) }
        </td>
        <td>
          { this.props.dateOfBirth }
        </td>
      </tr>
    );
  }
}

export default CustomerRow;
