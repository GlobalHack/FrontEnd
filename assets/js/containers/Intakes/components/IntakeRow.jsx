import React, {Component} from 'react';

class IntakeRow extends Component {

  render() {
    if (!this.props) return null
    return (
      <tr>
        <td>
          { this.props.customer.uuid }
        </td>
        <td>
          { this.props.created }
        </td>
        <td>
          { String(this.props.complete) }
        </td>
      </tr>
    );
  }
}

export default IntakeRow;
