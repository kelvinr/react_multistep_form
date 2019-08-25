import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { handleChange, values: { occupation, city, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            name="occupation"
            hintText="Enter your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange}
            defaultValue={occupation}
          />
          <br />
          <TextField
            name="city"
            hintText="Enter your City"
            floatingLabelText="City"
            onChange={handleChange}
            defaultValue={city}
          />
          <br />
          <TextField
            name="bio"
            hintText="Enter your Bio"
            floatingLabelText="Bio"
            onChange={handleChange}
            defaultValue={bio}
          />
          <br /><br />
          <RaisedButton 
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton 
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
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

export default FormPersonalDetails;
