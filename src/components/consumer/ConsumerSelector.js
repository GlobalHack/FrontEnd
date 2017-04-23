import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/consumerActions';
import ConsumerCardList from '../consumer/ConsumerCardList';
import ConsumerForm from '../consumer/ConsumerForm';

class ConsumerSelector extends React.Component {
  componentWillMount() {
    this.props.actions.loadConsumers();
  }

  pickConsumer = (id) => {
    // console.log(id);
    let consumer = _.find(this.props.consumers, {id});
    // console.log(consumer);
    this.props.onSwitchConsumerForm(consumer);
  };

  render() {
    const {consumers, consumerState, onUpdateConsumerForm, onSwitchConsumerForm, handleMove} = this.props;
    // console.log(consumerState);
    return (
      <div>
        <Row>
          <Col xs={12} sm={6}>
            <ConsumerForm
              consumerState={consumerState}
              onUpdateConsumerForm={onUpdateConsumerForm}
              onSwitchConsumerForm={onSwitchConsumerForm}
            />
          </Col>
          <Col xs={12} sm={6}>
            <ConsumerCardList consumers={consumers} onPickConsumer={this.pickConsumer}/>
          </Col>
        </Row>
        <Toolbar style={{marginTop: 20}}>
          <ToolbarGroup/>
          <ToolbarGroup>
            <RaisedButton
              label="on to questionnaire"
              primary={true}
              onTouchTap={() => handleMove(1)}
            />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

ConsumerSelector.propTypes = {
  consumerState: PropTypes.object.isRequired,
  onUpdateConsumerForm: PropTypes.func.isRequired,
  consumers: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    consumers: state.consumers
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerSelector);