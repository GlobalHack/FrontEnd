import DatePicker from 'material-ui/DatePicker';
import LinearProgress from 'material-ui/LinearProgress';
import {grey400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const IntakeForm = () => {

  const styles = {
    toggleDiv: {
      maxWidth: 200,
      marginTop: 40,
      marginBottom: 5,
      // float: 'left'
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    snackbar: {
      fontSize: 22
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  const handleRequestClose = (reason) => {
    if (reason !== 'clickaway') {
      this.setState({
        open: false,
      });
    }
  }

  return (
    <form>
      <LinearProgress mode="determinate" value={3} max={45}/>
      <TextField
        hintText="45"
        floatingLabelText="How Old Are You?"
        fullWidth={true}
        type="number"
      />
      <div style={styles.toggleDiv}>
        <Toggle
          label="Domestic Violence"
          labelStyle={styles.toggleLabel}
        />
      </div>
      <TextField
        hintText="Smith"
        floatingLabelText="Last Name"
        fullWidth={true}
      />
      <TextField
        hintText="XXX-XX-XXXX"
        floatingLabelText="Social Security Number"
        fullWidth={true}
      />

      <DatePicker
        hintText="Birthday"
        floatingLabelText="Birthday"
        maxDate={new Date()}
        mode="landscape"
        fullWidth={true}/>

      <div style={styles.toggleDiv}>
        <Toggle
          label="Youth"
          labelStyle={styles.toggleLabel}
        />
      </div>

      <div style={styles.toggleDiv}>
        <Toggle
          label="Domestic Violence"
          labelStyle={styles.toggleLabel}
        />
      </div>
      <Snackbar
        open={true}
        contentStyle={styles.snackbar}
        bodyStyle={styles.snackbar}
        message="Acuity Score"
        action="12"
        onRequestClose={handleRequestClose}
      />
    </form>

  );
};

export default IntakeForm;
