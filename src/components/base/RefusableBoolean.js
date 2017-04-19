import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import {Col, Row} from 'react-flexbox-grid';

class RefusableBoolean extends React.Component {

  state = {
    refused: false,
    toggled: this.props.value || false
  };

  handleChange = (e) => {
    this.setState({toggled: !this.state.toggled});
    // console.log(this.state.toggled);
    this.props.onChangeValidate(this.props.form.key,this.state.toggled);
  };

  refuse = () => {
    this.handleChange({target:{value:'refuse'}});
    this.setState({refused: !this.state.refused});
  };

  render() {
    console.log(this.props.value);
    return (
      <Row className="Aligner">
        <Col xs={11}>
          <Toggle
            label={this.props.form.title}
            disabled={this.state.refused}
            onToggle={this.handleChange}
            defaultToggled={this.state.toggled}
          />
        </Col>
        <Col xs={1}>
          <Checkbox
            label="Refuse"
            onCheck={this.refuse}
            // style={{marginTop:'30px'}}
          />
        </Col>
      </Row>
    );
  }
}

export default RefusableBoolean;
