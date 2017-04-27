import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import ComposedComponent from 'react-schema-form/lib/ComposedComponent';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

// https://github.com/networknt/react-schema-form/blob/master/src/Checkbox.js
class RefusableSelect extends React.Component {

  state = {
    refused: this.props.value === 'refused',
    currentValue: this.props.model[this.props.form.key]
    || (this.props.form.titleMap != null ? this.props.form.titleMap[0].value : '')
  };

  refuse = () => {
    let value = !this.state.refused;
    this.setState({refused: value});
    this.props.onChangeValidate({target: {value: value && 'refused'}});
    // console.log(value);
  };

  onSelected = (event, selectedIndex, menuItem) => {
    this.setState({
      currentValue: menuItem
    });
    event.target.value = menuItem;
    this.props.onChangeValidate(event);
  };

  render() {
    const menuItems = (this.props.form.titleMap||[
      {
        "value": "A",
        "label": "Authorized to anyone"
      },
      {
        "value": "N",
        "label": "Not Accessible"
      },
      {
        "value": "C",
        "label": "Client Based"
      },
      {
        "value": "R",
        "label": "Role Based"
      }]).map((item, idx) => (
      <MenuItem key={idx}
                primaryText={item.label}
                value={item.value} />
    ));
    return (
      <Row className="Aligner">
        <Col xs={11}>
          <SelectField
            value={this.state.currentValue}
            floatingLabelText={this.props.form.title}
            disabled={this.state.refused}
            onChange={this.onSelected}
            fullWidth={true}
          >
            {menuItems}
          </SelectField>
        </Col>
        <Col xs={1}>
          <Checkbox
            label="Refuse"
            onCheck={this.refuse}
            defaultChecked={this.state.refused}
            // style={{marginTop:'30px'}}
          />
        </Col>
      </Row>
    );
  }
}

export default ComposedComponent(RefusableSelect);
