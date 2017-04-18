import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import React, {Component} from 'react';
import {Col, Row} from 'react-flexbox-grid';

class RefusableBoolean extends Component {

  render() {
    return (
      <Row className="Aligner">
        <Col xs={11}>
          <Toggle
            label={this.props.form.title}
          />
        </Col>
        <Col xs={1}>
          <Checkbox
            label="Refuse"
            // style={{marginTop:'30px'}}
          />
        </Col>
      </Row>
    );
  }
}

export default RefusableBoolean;
