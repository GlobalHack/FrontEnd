import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ConsumerCard extends React.Component {

  render() {
    const {consumerState, handleMove} = this.props;
    if (consumerState.firstName) {
      return <Card>
        <CardHeader
          title={consumerState.firstName + ' ' + consumerState.lastName}
          subtitle={'Born:' + consumerState.dateOfBirth + ''}
          avatar="https://s.gravatar.com/avatar/d02d9794797b375e5b37ebc641b25dae?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fu.png"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title="Card title" subtitle="Card subtitle" expandable={true}/>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    } else {
      return <div>
        Please complete the consumer section<br />
        <RaisedButton
          label="Go Back"
          primary={true}
          onTouchTap={() => handleMove(0)}
        />
      </div>
    }
  }
}

export default ConsumerCard;
