import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Menu extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <ul className="menu">
            <li><Link to="/intakes" className="intakes"><span className="bi_user-alt-list"></span> Intakes</Link></li>
            <li><Link to="/createUser" className="createUser"><span className="bi_user-alt-list"></span> CreateUser</Link></li>
            <li><Link to="/icons">Icons</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    );
  }
}

require('styles/components/Menu')

Menu.defaultProps = {
    defaultCheckedArray: []    
}

export default Menu