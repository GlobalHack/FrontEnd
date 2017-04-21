import Avatar from 'material-ui/Avatar';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/consumerActions';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends React.Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
      onChange: PropTypes.func.isRequired
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue
      });
    }

    handleRequestChange = (event, index) => {
      this.props.onChange(index);
      this.setState({
        selectedIndex: index
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

class ConsumerCard extends React.Component {

  handleSelect = (id) => {
    // this.props.actions.loadConsumer(id);
    this.props.onPickConsumer(id);
  };

  render() {
    const {consumers} = this.props;
    return (
      <Paper style={{maxHeight: 400, overflow: 'auto'}}>
        <SelectableList defaultValue={0} onChange={this.handleSelect}>
          <Subheader>Select Consumer</Subheader>
          {consumers.map(consumer =>
            <ListItem
              key={consumer.id}
              value={consumer.id}
              leftAvatar={
                <Avatar
                  src="https://s.gravatar.com/avatar/d02d9794797b375e5b37ebc641b25dae?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fj.png"
                />
              }
              primaryText={consumer.firstName + ' ' + consumer.lastName}
              secondaryText={"Date of Birth: " + moment(consumer.dateOfBirth).format('MMM Do YY') + ''}
              secondaryTextLines={2}
            />
          )}
        </SelectableList>
      </Paper>
    );
  }
}

ConsumerCard.propTypes = {
  consumer: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    consumer: state.consumer
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerCard);