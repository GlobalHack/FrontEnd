import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import ComposedComponent from 'react-schema-form/lib/ComposedComponent';

// https://github.com/networknt/react-schema-form/blob/master/src/Checkbox.js
class RefusableBoolean extends React.Component {

  state = {
    refused: false,
    toggled: this.props.value || false
  };

  refuse = () => {
    let value = !this.state.refused;
    this.setState({refused: value});
    this.props.onChangeValidate({target: {value: value && 'refused'}});
    console.log(value);
  };

  render() {
    // console.log(this.props);
    return (
      <Row className="Aligner">
        <Col xs={11}>
          <Toggle
            name={this.props.form.key.slice(-1)[0]}
            value={this.props.form.key.slice(-1)[0]}
            defaultToggled={this.props.value || false}
            label={this.props.form.title}
            onToggle={(e, checked) => {
              this.props.onChangeValidate(e);
            }}
            disabled={this.state.refused}
          />
        </Col>
        <Col xs={1}>
          <Checkbox
            label="Refuse"
            onCheck={this.refuse}
            defaultChecked={this.props.value === 'refused'}
            // style={{marginTop:'30px'}}
          />
        </Col>
      </Row>
    );
  }
}

export default ComposedComponent(RefusableBoolean);
