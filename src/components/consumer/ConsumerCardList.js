import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {darkBlack} from 'material-ui/styles/colors';

class ConsumerCard extends React.Component {

  render() {
    const {consumers} = this.props;
    return (
      <Paper>
        <List>
          <Subheader>Select Consumer</Subheader>
          {consumers.map(consumer =>
            <div key={consumer.id}>
              <Divider inset={false}/>
              <ListItem
                leftAvatar={<Avatar
                  src="https://s.gravatar.com/avatar/d02d9794797b375e5b37ebc641b25dae?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fj.png"/>}
                primaryText={consumer.firstName + ' ' + consumer.lastName}
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Date of Birth:{consumer.dateOfBirth}</span> --
                    Description of this consumer
                  </p>
                }
                secondaryTextLines={2}
              />
            </div>
          )}
        </List>
      </Paper>
    );
  }
}

export default ConsumerCard;
