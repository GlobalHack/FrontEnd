import React, {Component} from 'react'
import {connect} from 'react-redux'

/* COMPONENTS --- */
import OrganizationRow from './components/OrganizationRow'

@connect(state => ({}))

class OrganizationsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      organizations: [],
      hasError: false
    }
  }

  componentWillMount() {
    var _this = this;
    $.get('/organizations')
      .done(function (response) {
        _this.setState({
          organizations: response
        })
      })
      .fail(function () {
        _this.setState({
          hasError: true
        })
      })
  }

  render() {
    if (this.state.hasError) return ( <p>Unable to get organizations.</p> )
    var organizationsRows = this.state.organizations.map((organization, i) => {
      return <OrganizationRow key={`organization-row-${i}`} { ...organization } />
    })
    return (
      <div>
        <table className="table table-responsive table-sm table-hover table-bordered table-striped ">
          <thead className="thead-default">
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            { organizationsRows }
          </tbody>
        </table>
      </div>
    )
  }
}

export default OrganizationsView
