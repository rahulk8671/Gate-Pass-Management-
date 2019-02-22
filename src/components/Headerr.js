import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { startLogOut } from '../actions/auth';
import { connect } from 'react-redux';
const { Header, Content, Footer } = Layout;

 export const Headerr = (props) => (
  
 
  <header className="header">
      <div className="content-container">
        <div className="header__content">
          <div className="header__navlink">
            <NavLink className="header__nav1" to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
            <NavLink className="header__nav2" to="/create" activeClassName="is-active">Create GatePass</NavLink>
          </div>
          <div>
            <Button ghost onClick={props.startLogOut}>Log Out</Button>
          </div>
        </div>
        
        
      </div>
  </header>
 
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