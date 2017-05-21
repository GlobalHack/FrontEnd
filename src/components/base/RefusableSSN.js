import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Col, Row} from 'react-flexbox-grid';
import ComposedComponent from 'react-schema-form/lib/ComposedComponent';
import InputElement from 'react-input-mask';

// https://github.com/networknt/react-schema-form/blob/master/src/Number.js
class RefusableNumber extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refused: this.props.value === 'refused'
    };
  }

  refuse = () => {
    let value = !this.state.refused;
    this.setState({refused: value});
    this.props.onChangeValidate({target: {value: value && 'refused'}});
    console.log(value);
  };

  tmp = (e) => {
    var inputNode = ReactDOM.findDOMNode(e.target);
    console.log(inputNode.value);
    this.props.onChangeValidate({target: {value: inputNode.value}});
  };

  render() {
    // console.log(this.props.form);
    this.props.form.readonly = this.state.refused;
    return (
      <Row className="Aligner">
        <Col xs={9}>
          <TextField
            type="text"
            floatingLabelText={this.props.form.title}
            hintText={this.props.form.placeholder}
            errorText={this.props.error}
            onChange={this.props.onChangeValidate}
            defaultValue={this.state.refused?'':this.props.value}
            disabled={this.state.refused}
            style={this.props.form.style || {width: '100%'}}>
            <InputElement
              mask="999-99-9999"
              maskChar={null}
              onKeyDown={this.tmp}
              defaultValue={this.state.refused?'':this.props.value}
              />
          </TextField>
        </Col>
        <Col xs={3}>
          <Checkbox
            label="Refuse"
            onCheck={this.refuse}
            defaultChecked={this.state.refused}
          />
        </Col>
      </Row>
    );
  }
}

export default ComposedComponent(RefusableNumber);
