
import React, { Component } from 'react';

import SocialButton from './components/SocialButton/SocialButton'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: '' }
    // this.onSuccess = this.onSuccess.bind(this);
    // this.onFailed = this.onFailed.bind(this);
  }
  onSuccess = (response) => {
    const token = response.token.accessToken;
    if (token) {
      this.setState({ isAuthenticated: true, user: response.profile, token: token });
    }
  };

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null })
  };


  onFailed = (error) => {
    alert(error);
  };

  render() {
    let content = !!this.state.isAuthenticated ?
      (
        <div>
          <p>Authenticated</p>
          <div>
            {this.state.user.email}
          </div>
          <div>
            <button onClick={this.logout} className="button" >
              Log out
            </button>
          </div>
        </div>
      ) :
      (
        <SocialButton
          provider='linkedin'
          appId='7773ywmrf2wxgx'
          onLoginSuccess={this.onSuccess}
          onLoginFailure={this.onFailed}
        >
          Login with linkedin
    </SocialButton>
      );

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
