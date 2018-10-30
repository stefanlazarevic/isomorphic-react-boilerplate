import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Input from '@components/form/input/Input';
import Button from '@components/form/button/Button';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <Input name="username" type="text" placeholder="Username" />
        <Input name="password" type="password" placeholder="Password" />
        <Button>Login</Button>
      </div>
    );
  }
}

export default hot(module)(Login);
