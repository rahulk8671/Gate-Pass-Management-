import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '../actions/auth';
import { Button } from 'antd';

export const LoginPage = (props) => (
  <div>
    <Button onClick={props.startLogIn}>Log In</Button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogIn: () => dispatch(startLogIn())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);