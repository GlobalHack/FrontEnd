import React from 'react';
import ReactDOM from 'react-dom';
import ComposedComponent from 'react-schema-form/lib/ComposedComponent';
import TextField from 'material-ui/TextField';
import InputElement from 'react-input-mask';
import Checkbox from 'material-ui/Checkbox';
import { Col, Row } from 'react-flexbox-grid';

class Date extends React.Component {
  state = {
    refused: this.props.value === 'refused',
  };

  refuse = () => {
    const value = !this.state.refused;
    this.setState({ refused: value });
    this.props.onChangeValidate({ target: { value: value && 'refused' } });
    console.log(value);
  };

  onDatePicked(empty, date) {
    this.props.onChangeValidate(new Date(date).props);
  }

  tmp = (e) => {
    const inputNode = ReactDOM.findDOMNode(e.target);
    console.log(inputNode.value);
    this.props.onChangeValidate({ target: { value: inputNode.value } });
  };

  render() {
    return (
      <Row className="Aligner">
        <Col xs={9}>
          <TextField
            type="number"
            floatingLabelText={this.props.form.title}
            hintText="02/24/1970"
            errorText={this.props.error}
            ref="numberField"
            disabled={this.state.refused}
            style={this.props.form.style || { width: '100%' }}
          >
            <InputElement
              mask="99/99/9999"
              maskChar={null}
              onBlur={this.tmp}
              defaultValue={this.state.refused ? '' : this.props.value}
            />
          </TextField>
        </Col>
        <Col xs={3}>
          <Checkbox
            label="Refuse"
            onCheck={this.refuse}
            defaultChecked={this.state.refused}
            // style={{marginTop:'30px'}}
            // checkedIcon={<Close />}
          />
        </Col>
      </Row>
    );
  }
}

export default ComposedComponent(Date);
