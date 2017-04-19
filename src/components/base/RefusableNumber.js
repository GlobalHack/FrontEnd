import Checkbox from 'material-ui/Checkbox';
import React, {Component} from 'react';
import {Col, Row} from 'react-flexbox-grid';
import Number from 'react-schema-form/lib/Number';

class RefusableNumber extends Component {

  state = {
    refused: false
  };

  refuse = () => {
    this.setState({refused: !this.state.refused});
  };

  render() {
    this.props.form.readonly = this.state.refused;
    return (
      <Row className="Aligner">
        <Col xs={11}>
          <Number
            form={this.props.form}
          />
        </Col>
        <Col xs={1}>
          <Checkbox
            label="Refuse"
            onCheck={this.refuse}
            // style={{marginTop:'30px'}}
            // checkedIcon={<Close />}
          />
        </Col>
      </Row>
    );
  }
}

export default RefusableNumber;
