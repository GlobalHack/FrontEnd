import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import moment from 'moment';
import React from 'react';

class ConsumerCard extends React.Component {

  render() {
    const {consumerState, handleMove} = this.props;
    let intakes = [{id: 1, createdAt: new Date(), score: 3}, {id: 2, createdAt: new Date(), score: 5}];
    if (consumerState.id) {
      return <Card>
        <CardHeader
          title={consumerState.firstName + ' ' + consumerState.lastName}
          subtitle={'Born: ' + moment(consumerState.dateOfBirth).format('MMM Do YY') + ''}
          avatar={<AccountBox />}
          /*actAsExpander={true}*/
          /*showExpandableButton={true}*/
        />
        <CardText expandable={true}>
          <List>
            <Subheader>Previous Intakes</Subheader>
            {intakes.map(intake =>
              <ListItem
                key={intake.id}
                primaryText={"Date: " + moment(intake.createdAt).format('MMM Do YY')}
                secondaryText={"Score: " + intake.score}
                rightToggle={
                  <RaisedButton
                    label="Edit"
                    primary={true}
                  />
                }
              />
            )}
          </List>
        </CardText>
        <CardActions>
          {this.props.actions}
        </CardActions>
      </Card>;
    } else {
      return <div>
        Please complete the consumer section<br />
        <RaisedButton
          label="back to consumer"
          primary={true}
          onTouchTap={() => handleMove(0)}
        />
      </div>;
    }
  }
}

export default ConsumerCard;
