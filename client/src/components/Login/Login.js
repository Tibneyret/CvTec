import React from 'react';
import { Button } from "react-bootstrap";
import API from '../../utils/API';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.send.bind(this);
  }
  send = event => {
    API.login().then(function (data) {
      localStorage.setItem('token', data.data.token);
      window.location = "/Dashboard"
    }, function (error) {
      console.log(error);
      return;
    })
  }
  render() {
    return (
      <div className="Login">
        <Button
          onClick={this.send}
          block
          bsSize="large"
          type="submit"
        >
          Connexion
        </Button>
      </div>
    )
  }
}