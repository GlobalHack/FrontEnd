import RaisedButton from 'material-ui/RaisedButton';
import React, {PropTypes} from 'react';
import {Col, Row} from 'react-flexbox-grid';
import ConsumerCard from '../consumer/ConsumerCard';
import QuestionnaireCard from '../questionset/QuestionnaireCard';

class IntakeSummary extends React.Component {

  render() {
    const {handleMove} = this.props;
    return (
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
    );
  }
}
;

IntakeSummary.propTypes = {
  consumerState     : PropTypes.object.isRequired,
  questionnaireState: PropTypes.object.isRequired
};

export default IntakeSummary;
