import React, {Component} from 'react'
import {connect} from 'react-redux'

/* COMPONENTS --- */
import Box from 'components/custom-box/box'

@connect(state => ({}))

class Intakes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Intakes
            <small>view all Intakes</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Intakes</a></li>
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
            { this.props.children }
          </Box>
        </section>
      </div>
    )
  }
}

export default Intakes
