import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Menu extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <header>
            <h5>St. Patrick's Center</h5>
            <ul className="header-submenu">
                <li><Link to="/login">Taylor Swift</Link></li>
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