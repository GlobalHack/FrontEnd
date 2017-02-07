import React, { Component } from 'react';

class UserRow extends Component {
    
    render() {
        if (!this.props.customer) return null
        return (
            <tr>
                <td>
                    { this.props.customer.firstName }
                </td>
                <td>
                    { this.props.customer.lastName }
                </td>
                <td>
                    { this.props.customer.dateOfBirth }
                </td>
            </tr>
        );
    }
}

export default UserRow;