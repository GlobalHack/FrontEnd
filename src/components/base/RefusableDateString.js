import React from 'react';
import ComposedComponent from 'react-schema-form/lib/ComposedComponent';
import TextField from 'material-ui/TextField';
import InputElement from 'react-input-mask';

class Date extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      refused: false
    };
  }

  refuse = () => {
    let value = !this.state.refused;
    this.setState({refused: value});
    // this.props.onChangeValidate({target: {value:null}});
    console.log(value);
  };


  onDatePicked(empty, date) {
    this.props.onChangeValidate(new Date(date).props);
  }

  render() {
    return (
      <div style={{width: '100%', display: 'block'}}>
        <TextField
          type="number"
          floatingLabelText={this.props.form.title}
          hintText="02/24/1970"
          errorText={this.props.error}
          ref="numberField"
          disabled={this.state.refused}
          style={this.props.form.style || {width: '100%'}}>
          <InputElement
            mask="99/99/9999"
            maskChar={null}
          />
        </TextField>
      </div>
    );
  }
}

export default ComposedComponent(Date);