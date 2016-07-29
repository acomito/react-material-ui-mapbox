import React from 'react';
import { Link, browserHistory } from 'react-router';
//modules
import { handleLogin } from '../../modules/login';
//material-ui stuff
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
//forms
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';



  const styles = {
    cardStyles: {
      "width": "40%",
      "margin": "auto",
      "marginTop": "40px",
      "padding": "20px",
      textAlign: "center",
    },
    textField: {
      display: "block",
      width: "70%",
      margin: "auto",
      background: "#ffffff",
      backgroundColor: "#ffffff",
      marginBottom: "20px",
    },
    cardActionStyles: {
      margin: "auto"
    }
  }


export class Login extends React.Component {


  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {
    let email = data.emailAddress;
    let password = data.password;
    handleLogin(email, password);
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Card style={styles.cardStyles} >
      <CardTitle title="Login" />
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
          <FormsyText 
            floatingLabelText="Email" 
            style={styles.textField}
            name="emailAddress" 
            validations="isEmail" 
            validationError="This is not a valid email" 
            required 
          />
          <FormsyText 
            floatingLabelText="Password" 
            style={styles.textField} 
            value="" 
            name="password" 
            type="password" 
            required 
          />
          <CardActions style={styles.cardActionStyles}>
            <RaisedButton type="submit" secondary={true} label="Login" disabled={!this.state.canSubmit} />
            <Link to="/recover-password"><FlatButton label="Forgot Password?" /></Link>
          </CardActions>
        </Formsy.Form>
      </Card>
    );
  }
}


