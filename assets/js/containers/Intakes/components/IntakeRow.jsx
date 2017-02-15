import React, { Component } from 'react';
import { Link } from 'react-router'

class IntakeRow extends Component {

    render() {
        if (!this.props) return null
        return (
            <tr>
                <td>
                    {this.props.customer?this.props.customer.uuid:"None"}
                </td>
                <td>
                    {this.props.created}
                </td>
                <td>
                    {this.props.score}
                </td>
                <td>
                    {String(this.props.complete)}
                </td>
                <td>
                    <Link to={`/intakes/${this.props.id}/edit`} className="btn btn-info">Edit</Link>
                </td>
            </tr>
        );
    }
}

export default IntakeRow;
