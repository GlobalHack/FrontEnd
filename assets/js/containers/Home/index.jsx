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
            border={true}
            width="12"
            theme="box-default"
            title="Features"
            >
            <h2>Accounts</h2>
            <p>Logging into and out of the system, account creation, account administration, account
              deletion and data security.</p>

            <h2>Intake Form</h2>
            <p>The intake form includes the standard questions that are asked and cannot
              be removed, the possible answers to those questions (and their compliance with HUD regulations,
              adding/removing additional questions, outputting the answers into the database, and an optimized UI of
              the form for PC and mobile.</p>

            <h2>Database</h2>
            <p>The database is compliant with HUD standards, and ensures reasonable uptimes.</p>

            <h2>API</h2>
            <p>The API includes all features for querying your information.</p>

            <h2>Coordinate Management</h2>
            <p>The Coordinated Management System web app allows case managers to
              build a service plan for individuals, refer them to different CoC member organizations, set up meetings
              within those organizations, confirm the individual visited and utilized the services of the CoC member
              organization, and track progress for each individual member.</p>
          </Box>
        </section>
      </div>
    )
  }
}

export default Home;
