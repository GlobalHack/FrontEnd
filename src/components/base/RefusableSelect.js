import Checkbox from 'material-ui/Checkbox';
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

  Header = ({help, heading}) => {
    if (help) {
      return (
        <Col xs={12}>
          <span style={{color: "lightcoral"}}>{help}</span>
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
    const menuItems = ((this.props.form.schema.options||"").split('|')).map((item, idx) => (
      <MenuItem key={idx}
                primaryText={item}
                value={item}/>
    ));
    // console.log(this.props.form);
    return (
      <Row className="Aligner">
        <this.Header help={this.props.form.help} heading={this.props.form.heading}/>
        <Col xs={10} xsOffset={1}>
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
