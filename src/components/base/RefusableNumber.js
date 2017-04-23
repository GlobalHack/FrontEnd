import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import React, {Component} from 'react';
import {Col, Row} from 'react-flexbox-grid';
import ComposedComponent from 'react-schema-form/lib/ComposedComponent';

// https://github.com/networknt/react-schema-form/blob/master/src/Number.js
class RefusableNumber extends Component {

  constructor(props) {
    super(props);
    this.preValidationCheck = this.preValidationCheck.bind(this);
    this.state = {
      refused: false,
      lastSuccessfulValue: this.isNumeric(this.props.value) ? this.props.value : null
    };
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  preValidationCheck(e) {
    if (this.isNumeric(e.target.value)) {
      this.setState({
        lastSuccessfulValue: e.target.value
      });
      this.props.onChangeValidate(e);
    } else {
      this.refs.numberField.value = this.state.lastSuccessfulValue;

    }
    this.props.onChangeValidate(e);
  }

  refuse = () => {
    let value = !this.state.refused;
    this.setState({refused: value});
    this.props.onChangeValidate({target: {value: value && 'refused'}});
    console.log(value);
  };

  render() {
    // console.log(this.props.value);
    this.props.form.readonly = this.state.refused;
    return (
      <Row className="Aligner">
        <Col xs={11}>
          <TextField
            type={this.props.form.type}
            floatingLabelText={this.props.form.title}
            hintText={this.props.form.placeholder}
            errorText={this.props.error}
            onChange={this.preValidationCheck}
            defaultValue={this.state.lastSuccessfulValue}
            ref="numberField"
            disabled={this.props.form.readonly}
            style={this.props.form.style || {width: '100%'}}/>
        </Col>
        <Col xs={1}>
          <Checkbox
            label="Refuse"
            onCheck={this.refuse}
            defaultChecked={this.props.value === 'refused'}
            // style={{marginTop:'30px'}}
            // checkedIcon={<Close />}
          />
        </Col>
      </Row>
    );
  }
}

export default ComposedComponent(RefusableNumber);
