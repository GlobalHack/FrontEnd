import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Assessment from 'material-ui/svg-icons/action/assessment';
import React from 'react';
import {score} from '../../utils/AcuityService';

class QuestionnaireCard extends React.Component {

  render() {
    const {questionnaireState, handleMove} = this.props;
    return (
      <Card>
        <CardHeader
          title={Object.keys(questionnaireState).length + ' questions complete'}
          subtitle={"Acuity Score: " + score(questionnaireState)}
          avatar={<Assessment />}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          Currently using base question set

        </CardText>
        <CardActions>
          <RaisedButton
            label="Back To Questionnaire"
            primary={true}
            onTouchTap={() => handleMove(1)}
          />
        </CardActions>
      </Card>
    );
  }
}

export default QuestionnaireCard;
