import Checkbox from 'material-ui/Checkbox';
import React, {Component} from 'react';
import {Col, Row} from 'react-flexbox-grid';
import Number from 'react-schema-form/lib/Number';
import TextField from 'material-ui/TextField';
import Close from 'material-ui/svg-icons/navigation/close';

class RefusableNumber extends Component {

  render() {
    return (
      <Row className="Aligner">
        <Col xs={11}>
          <Number form={this.props.form} />
        </Col>
        <Col xs={1}>
          <Checkbox
            label="Refuse"
            // style={{marginTop:'30px'}}
            // checkedIcon={<Close />}
          />
        </Col>
      </Row>
    );
  }
}

export default RefusableNumber;
