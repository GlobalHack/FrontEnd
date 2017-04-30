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



  Header = ({help, heading}) => {
    // console.log(header);
    if (help){
      return (
        <Col xs={12}>
          <span style={{color: "lightcoral"}}>{help}</span>
        </Col>
      );
    } else if (heading){
      return (
        <Col xs={12}>
          <h1>{heading}</h1><hr />
        </Col>
      );
    }
    return null;
  };

  render() {
    // console.log(this.props.form);
    this.props.form.readonly = this.state.refused;
    return (
      <Row className="Aligner">
        <this.Header help={this.props.form.help} heading={this.props.form.heading}/>
        <Col xs={11}>
          <TextField
            type="number"
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
