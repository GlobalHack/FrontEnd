import React, { Component } from 'react'
import { connect } from 'react-redux'

/* COMPONENTS --- */
import UserRow from './components/UserRow'

@connect(state => ({}))

class UsersView extends Component {
  constructor(props){
      super(props)
      this.state = {
          users: [],
          hasError: false
      }
  }

  componentWillMount(){
      var _this = this;
      $.get('/users')
        .done(function(response){
            _this.setState({
                users: response
            })
        })
        .fail(function(){
            _this.setState({
                hasError: true
            })
        })
  }

  render() {
    if (this.state.hasError) return( <p>Unable to get users.</p> )
    var usersRows = this.state.users.map((user, i) => {
        return <UserRow key={`user-row-${i}`} { ...user } />
    })
    return (
        <div>
            <table className="table table-responsive table-sm table-hover table-bordered table-striped ">
                <thead className="thead-default">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    { usersRows }
                </tbody>
            </table>
        </div>
    )
  }
}

export default UsersView
