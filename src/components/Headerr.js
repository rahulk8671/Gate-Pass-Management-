import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const Headerr = () => (
  
  <Layout className="layout">
  <Header>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create GatePass</NavLink>
      
  </Header>
  </Layout>
);

export default Headerr;

// <header>
//     <h1>GatePass</h1>
//     <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
//     <NavLink to="/create" activeClassName="is-active">Create GatePass</NavLink>
//   </header>