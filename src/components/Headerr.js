import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { startLogOut } from '../actions/auth';
import { connect } from 'react-redux';
const { Header, Content, Footer } = Layout;

 export const Headerr = (props) => (
  
  <Layout className="layout">
  <Header>
      <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
      <NavLink className="cre" to="/create" activeClassName="is-active">Create GatePass</NavLink>
      <Button onClick={props.startLogOut}>Log Out</Button>
  </Header>
  </Layout>
);

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined, mapDispatchToProps)(Headerr);

// <header>
//     <h1>GatePass</h1>
//     <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
//     <NavLink to="/create" activeClassName="is-active">Create GatePass</NavLink>
//  </header>