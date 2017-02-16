import React, { Component } from 'react';
import { Link } from 'react-router'

import * as DateService from 'services/DateService'

class IntakeRow extends Component {

    render() {
        if (!this.props) return null
        return (
            <tr>
                <td>
                    {this.props.customer?this.props.customer.firstName:"None"}
                </td>
                <td>
                    {this.props.customer?this.props.customer.lastName:"None"}
                </td>
                <td>
                    {DateService.format(this.props.created)}
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
