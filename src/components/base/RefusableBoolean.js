import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import ComposedComponent from 'react-schema-form/lib/ComposedComponent';

// https://github.com/networknt/react-schema-form/blob/master/src/Checkbox.js
class RefusableBoolean extends React.Component {
  state = {
    refused: this.props.value === 'refused',
    toggled: this.props.value === 'true' || 'false',
  };

  refuse = () => {
    const value = !this.state.refused;
    this.setState({ refused: value });
    this.props.onChangeValidate({ target: { value: value && 'refused' } });
    console.log(value);
  };

  Header = ({ help, heading }) => {
    if (help) {
      return (
        <Col xs={11} xsOffset={1}>
          <span style={{ color: 'lightcoral' }}>{help}</span>
        </Col>
      );
    } else if (heading) {
      return (
        <Col xs={12}>
          <h1>{heading}</h1><hr />
        </Col>
      );
    }
    return null;
  };

  render() {
    // console.log(this.props);
    return (
      <Row className="Aligner">
        <this.Header help={this.props.form.help} heading={this.props.form.heading} />
        <Col xs={10} xsOffset={1}>
          <Toggle
            name={this.props.form.key.slice(-1)[0]}
            value={this.props.form.key.slice(-1)[0]}
            defaultToggled={this.props.value === 'true' || false}
            label={this.props.form.title}
            onToggle={(e, checked) => {
              e.target.value = checked ? 'true' : 'false';
              this.props.onChangeValidate(e);
            }}
            disabled={this.state.refused}
          />
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

export default ComposedComponent(RefusableBoolean);
