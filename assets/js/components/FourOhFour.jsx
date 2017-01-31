import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Menu extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <div>
            <p>Ooops! This route is not defined.</p>
        </div>
    );
  }
}

//require('styles/components/Header')

Menu.defaultProps = {
    defaultCheckedArray: []
}

export default Menu
