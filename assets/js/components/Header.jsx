import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Menu extends Component {
  constructor(props){
      super(props)
  }

  render() {
    let {auth} = this.props
    let profile_name = auth.getProfile('email')
    name = profile_name ? profile_name : 'Guest'

    return (
        <header>
            <h5>St. Patrick's Center</h5>
            <ul className="header-submenu">
                <li><Link to="/login"> {name} </Link></li>
                <li><Link to="/settings"><span className="bi_setting-gear-b"></span></Link></li>
            </ul>
        </header>
    );
  }
}

require('styles/components/Header')

Menu.defaultProps = {
    defaultCheckedArray: []
}

export default Menu
