import React, {Component} from 'react'
import {connect} from 'react-redux'

/* COMPONENTS --- */
import Box from 'components/custom-box/box'

@connect(state => ({}))

class Users extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Users
            <small>view all users</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Users</a></li>
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
            { this.props.children }
          </Box>
        </section>
      </div>
    )
  }
}

export default Users
