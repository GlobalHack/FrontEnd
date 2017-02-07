import React, {Component} from 'react';

class CoordinatedEntryGroupRow extends Component {

  render() {
    if (!this.props) return null
    return (
      <tr>
        <td>
          { this.props.lead_organization.name }
        </td>
        <td>
          { this.props.name }
        </td>
        <td>
          { this.props.access_level }
        </td>
      </tr>
    );
  }
}

export default CoordinatedEntryGroupRow;
