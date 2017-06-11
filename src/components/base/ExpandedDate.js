import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import React, {Component} from 'react';
import {Col, Row} from 'react-flexbox-grid';
import ComposedComponent from 'react-schema-form/lib/ComposedComponent';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

// https://github.com/networknt/react-schema-form/blob/master/src/Number.js
class RefusableNumber extends Component {

  constructor(props) {
    super(props);
    this.preValidationCheck = this.preValidationCheck.bind(this);
    let defaultDate = new Date();
    this.state              = {
      refused: false,
      lastSuccessfulValue: this.isNumeric(this.props.value) ? this.props.value : null,
      month: new Date(this.props.value || defaultDate).getMonth(),
      day: new Date(this.props.value||defaultDate).getDate(),
      year: new Date(this.props.value||defaultDate).getFullYear()
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
      // this.props.onChangeValidate(e);
    } else {
      this.refs.numberField.value = this.state.lastSuccessfulValue;
    }
    // let f = Object.assign({},e);
    let f = {target:{value:new Date(this.state.year, this.state.month, this.state.day)}};
    // f.target.value = new Date(this.state.year, this.state.month, this.state.day);
    // f.type='date';
    // console.log(f.target.value)
    this.props.onChangeValidate(f);
  }

  onChangeDay(e){
    this.setState({
      day: e.target.value
    });
    let f = {target:{value:new Date(this.state.year, this.state.month, this.state.day)}};
    this.props.onChangeValidate(f);
  }

  onSelected = (e, selectedIndex, menuItem) => {
    console.log(menuItem);
    this.setState({
      month: menuItem
    });
    // let f = Object.assign({},e);
    // f.target.value = new Date(this.state.year, this.state.month, this.state.date);
    // this.props.onChangeValidate(f);
  };

  Header = ({help, heading}) => {
    // console.log(header);
    if (help) {
      return (
        <Col xs={12}>
          <span style={{color: 'lightcoral'}}>{help}</span>
        </Col>
      );
    } else if (heading) {
      return (
        <Col xs={12}>
          <h1>{heading}</h1>
          <hr />
        </Col>
      );
    }
    return null;
  };

  render() {
    const menuItems          = (this.props.form.titleMap || [
      {
        'value': 0,
        'label': 'January'
      },
      {
        'value': 1,
        'label': 'February'
      },
      {
        'value': 2,
        'label': 'March'
      },
      {
        'value': 3,
        'label': 'April'
      },
      {
        'value': 4,
        'label': 'May'
      },
      {
        'value': 5,
        'label': 'June'
      },
      {
        'value': 6,
        'label': 'July'
      },
      {
        'value': 7,
        'label': 'August'
      },
      {
        'value': 8,
        'label': 'September'
      },
      {
        'value': 9,
        'label': 'October'
      },
      {
        'value': 10,
        'label': 'November'
      },
      {
        'value': 11,
        'label': 'December'
      }]).map((item, idx) => (
      <MenuItem key={idx}
                primaryText={item.label}
                value={item.value}/>
    ));
    console.log(this.state);
    this.props.form.readonly = this.state.refused;
    return (
      <Row className='Aligner'>
        <Col xs={4}>
          <SelectField
            value={this.state.month}
            floatingLabelText='month'
            disabled={this.state.refused}
            onChange={this.onSelected}
            fullWidth={true}
          >
            {menuItems}
          </SelectField>
        </Col>
        <Col xs={2}>
          <TextField
            type='number'
            floatingLabelText='Day'
            hintText='1'
            errorText={this.props.error}
            onChange={this.preValidationCheck}
            defaultValue={this.state.day}
            ref='numberField'
            disabled={this.props.form.readonly}
            style={this.props.form.style || {width: '100%'}}/>
        </Col>
        <Col xs={3}>
          <TextField
            type='number'
            floatingLabelText='Year'
            hintText='1980'
            errorText={this.props.error}
            onChange={this.preValidationCheck}
            defaultValue={this.state.year}
            ref='numberField'
            disabled={this.props.form.readonly}
            style={this.props.form.style || {width: '100%'}}/>
        </Col>
        <Col xs={3}>
          <Checkbox
            label='Refuse'
            onCheck={this.refuse}
            defaultChecked={this.props.value === 'refused'}
            // style={{marginTop:'30px'}}
          />
        </Col>
      </Row>
    );
  }
}

export default ComposedComponent(RefusableNumber);
