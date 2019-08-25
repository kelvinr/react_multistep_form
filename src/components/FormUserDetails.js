import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { handleChange,  values: { firstName, lastName, email } } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            name="firstName"
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            defaultValue={firstName}
            onChange={handleChange}
          />
          <br />
          <TextField
            name="lastName"
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            defaultValue={lastName}
            onChange={handleChange}
          />
          <br />
          <TextField
            name="email"
            hintText="Enter your Email"
            floatingLabelText="Email"
            defaultValue={email}
            onChange={handleChange}
          />
          <br /><br />
          <RaisedButton 
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormUserDetails;
