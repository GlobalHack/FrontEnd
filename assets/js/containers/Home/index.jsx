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

export class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Home
            <small>welcome to cemaritan</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
          </ol>
        </section>

        <section className="content row">
          <Box
            border={false}
            width="12"
            theme="box-default"
            title="Your Data"
            headerMarkup={
              <i className="fa fa-tag"></i>
            }>
          </Box>
        </section>
      </div>
    )
  }
}

export default Home;
