import React, { Component } from 'react'
import { connect } from 'react-redux'

class Freshchat extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <script type='text/javascript'>var fc_JS=document.createElement('script');fc_JS.type='text/javascript';fc_JS.src='https://assets1.freshchat.io/production/assets/widget.js?t='+Date.now();(document.body?document.body:document.getElementsByTagName('head')[0]).appendChild(fc_JS); window._fcWidgetCode='W6OZ5J0PGK';window._fcURL='https://globalhack.freshchat.io';</script>
    );
  }
}

require('styles/components/Header')

Freshchat.defaultProps = {
    defaultCheckedArray: []    
}

export default Freshchat