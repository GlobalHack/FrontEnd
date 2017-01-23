import React, { Component } from 'react'
import { connect } from 'react-redux'

// import EditForm from './components/EditForm'

class IntakeAdd extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInputFile">File input</label>
                    <input type="file" id="exampleInputFile" />
                    <p className="help-block">Example block-level help text here.</p>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" /> Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    );
  }
}

export default IntakeAdd