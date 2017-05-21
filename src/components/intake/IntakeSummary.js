import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import ConsumerCard from '../consumer/ConsumerCard';
import QuestionnaireCard from '../questionset/QuestionnaireCard';
import {browserHistory} from 'react-router';
import {score} from '../../utils/AcuityService';
import {getProfile} from '../../utils/AuthService'

class IntakeSummary extends React.Component {

  saveIntake = () => {
    let intake = {
      consumer: this.props.consumerState,
      employee: getProfile().uid,
      complete: Object.keys(this.props.questionnaireState).length >= 52,
      score: score(this.props.questionnaireState),
      answers: this.props.questionnaireState,
      id: this.props.intake.id
    };
    this.props.saveIntake(intake).then(
      browserHistory.push('/intakes/updated/?ts='+Date.now())
    );
  };

  render() {
    console.log(Object.keys(this.props.questionnaireState).length);
    const {handleMove} = this.props;
    return (
      <div>
        <Row>
          <Col xs={12} sm={6}>
            <ConsumerCard {...this.props} actions={
              <RaisedButton
                label="Back To consumer"
                primary={true}
                onTouchTap={() => handleMove(0)}
              />
            }/>
          </Col>
          <Col xs={12} sm={6}>
            <QuestionnaireCard {...this.props} />
          </Col>
        </Row>
        <Toolbar style={{marginTop: 20}}>
          <ToolbarGroup>
            <FlatButton
              label="back to questionnaire"
              onTouchTap={() => handleMove(1)}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton
              label="submit"
              primary={true}
              onTouchTap={this.saveIntake}
            />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
;

IntakeSummary.propTypes = {
  consumerState: PropTypes.object.isRequired,
  questionnaireState: PropTypes.object.isRequired
};

export default IntakeSummary;
