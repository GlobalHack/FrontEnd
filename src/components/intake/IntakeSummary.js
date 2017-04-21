import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import ConsumerCard from '../consumer/ConsumerCard';
import QuestionnaireCard from '../questionset/QuestionnaireCard';

class IntakeSummary extends React.Component {

  render() {
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
              onTouchTap={() => alert('should save')}
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
