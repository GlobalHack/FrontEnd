import React, {PropTypes} from 'react';
import ConsumerCard from '../consumer/ConsumerCard';
import QuestionnaireCard from '../questionset/QuestionnaireCard';
import {Row, Col} from 'react-flexbox-grid';

class IntakeSummary extends React.Component {

  render() {
    return (
      <Row>
        <Col xs={12} sm={6}>
          <ConsumerCard {...this.props} />
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
  consumerState: PropTypes.object.isRequired,
  questionnaireState: PropTypes.object.isRequired
};

export default IntakeSummary;
