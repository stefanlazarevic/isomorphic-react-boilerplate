import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Input, Button, Heading } from '@components';

class Login extends Component {
  render() {
    return (
      <div>
        <Heading>Login Page</Heading>
        <Input name="username" type="text" placeholder="Username" />
        <Input name="password" type="password" placeholder="Password" />
        <Button>Login</Button>
      </div>
    );
  }
}

export default hot(module)(Login);
