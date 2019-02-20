import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '../actions/auth';
import { Button } from 'antd';

export const LoginPage = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Gate Pass Managment</h1>
      <p>Photo based Web App</p>
      <Button type="primary" onClick={props.startLogIn}>Login with Google</Button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogIn: () => dispatch(startLogIn())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);