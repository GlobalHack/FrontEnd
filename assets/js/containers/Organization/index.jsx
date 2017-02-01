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

export class Organization extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {auth} = this.props
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Data
            <small>Preview of data</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Data</a></li>
            <li className="active">Preview</li>
          </ol>
        </section>

        <section className="content">
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

export default Organization;
