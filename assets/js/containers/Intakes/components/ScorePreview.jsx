import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

require('styles/components/ScorePreview')

/* SERVICES --- */
import * as AcuityService from 'services/AcuityService'

class ScorePreview extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     score: props.score || 0
  //   }
  //   console.log(this.props);
  //   console.log(this.state);
  // }

  render() {
    var score = this.props.score;
    return (
      <div className="score-preview">
        { score }
      </div>
    );
  }
}

export default ScorePreview
