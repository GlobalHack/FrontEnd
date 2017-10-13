import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ACTIONS } from '../../Setup';
import ConsumerCardList from '../consumer/ConsumerCardList';
import ConsumerForm from '../consumer/ConsumerForm';

class ConsumerSelector extends React.Component {
  componentWillMount() {
    this.props.actions.loadConsumers();
  }

  pickConsumer = id => {
    // console.log(id);
    let newConsumer;
    if (typeof id === 'string' || typeof id === 'number') {
      newConsumer = _.find(this.props.consumers, { id });
    } else {
      newConsumer = id;
    }
    // console.log(newConsumer);
    this.props.onSwitchConsumerForm(newConsumer);
  };

  save = consumer => {
    this.setState({ consumer });
    this.props.actions.CONSUMER.CREATE(consumer).then(responseConsumer => {
      this.props.actions.CONSUMER.LOAD().then(
        this.props.actions.CONSUMER.LOAD().then(() => {
          this.pickConsumer(responseConsumer);
        })
      );
    });
  };

  render() {
    const {
      consumers,
      consumerState,
      onUpdateConsumerForm,
      onSwitchConsumerForm,
      handleMove
    } = this.props;
    // console.log(consumerState);
    return (
      <div>
        <Row>
          <Col xs={12} sm={6}>
            <ConsumerForm
              consumerState={consumerState}
              onUpdateConsumerForm={onUpdateConsumerForm}
              onSwitchConsumerForm={onSwitchConsumerForm}
              onSubmitConsumerForm={this.save}
            />
          </Col>
          <Col xs={12} sm={6}>
            <ConsumerCardList
              consumerState={consumerState}
              consumers={consumers}
              onPickConsumer={this.pickConsumer}
            />
          </Col>
        </Row>
        <Toolbar style={{ marginTop: 20 }}>
          <ToolbarGroup />
          <ToolbarGroup>
            <RaisedButton
              label="on to questionnaire"
              primary
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
    consumers: state.consumers,
    consumer: state.consumer
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ACTIONS, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerSelector);
