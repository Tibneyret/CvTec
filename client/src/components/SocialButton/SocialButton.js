import React from 'react';
import SocialLogin from 'react-social-login';
import Button from '@material-ui/core/Button';

const loginButton = ({ children, triggerLogin, ...props }) => (
  <Button onClick={triggerLogin} {...props}>
    {children}
  </Button>
);

export default SocialLogin(loginButton);