import React from 'react';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Assessment from 'material-ui/svg-icons/action/assessment';
import {score} from '../../utils/AcuityService';

class QuestionnaireCard extends React.Component {

  render() {
    const {questionnaireState, handleMove} = this.props;
    return <Card>
      <CardHeader
        title={Object.keys(questionnaireState).length + ' questions complete'}
        avatar={<Assessment />}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardTitle title={"Acuity Score: "+score(questionnaireState)} subtitle="Calculated using VI-SPIDAT" expandable={true}/>
      <CardText expandable={true}>
        Currently using base question set

      </CardText>
      <CardActions>
        <RaisedButton
          label="Back To Questions"
          primary={true}
          onTouchTap={() => handleMove(1)}
        />
      </CardActions>
    </Card>
  }
}

export default QuestionnaireCard;
