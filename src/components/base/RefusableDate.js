import React from 'react';
import ComposedComponent from 'react-schema-form/lib/ComposedComponent';
import DatePicker from 'material-ui/DatePicker/DatePicker';

class Date extends React.Component {

  constructor(props) {
    super(props);
    this.onDatePicked = this.onDatePicked.bind(this);
  }


  onDatePicked(empty, date) {
    this.props.onChangeValidate(new Date(date).props);
  }

  render() {
    return (
      <div style={{width: '100%', display: 'block'}}>
        <DatePicker
          mode={'landscape'}
          autoOk={true}
          hintText={this.props.form.title}
          onChange={this.onDatePicked}
          onShow={null}
          onDismiss={null}
          disabled={this.props.form.readonly}
          style={this.props.form.style || {width: '100%'}}/>

      </div>
    );
  }
}

export default ComposedComponent(Date);