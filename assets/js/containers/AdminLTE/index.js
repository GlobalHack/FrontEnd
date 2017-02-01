import React, {Component} from 'react'
import {connect} from 'react-redux'

/* COMPONENTS --- */
import Header from 'components/Header'
import Menu from 'components/Menu'
import HeaderBar from 'components/header-bar/header-bar'
import NavigationMenu from 'components/navigation-menu'
import ColorPaletteSet from 'components/color-palette-set'
import Box from 'components/custom-box/box'
import Alert from 'components/alert'
import Callout from 'components/callout'
import CustomTabs from 'components/custom-tabs/custom-tabs'

@connect(state => ({}))

class AdminLTE extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let children = null;
    let {auth} = this.props.route

    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }

    return (
      <div className="wrapper">
        <HeaderBar auth={auth}/>

        <NavigationMenu />

        {children}

        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> V.1.0
          </div>
        </footer>

        {/*<ControlsMenu />*/}
      </div>
    );
  }
}

export default AdminLTE
