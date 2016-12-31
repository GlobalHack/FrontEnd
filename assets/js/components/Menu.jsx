import React, { Component } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <header>
            <h2>Menu goes here...</h2>
        </header>
    );
  }
}

Menu.defaultProps = {
    defaultCheckedArray: []    
}

export default Menu