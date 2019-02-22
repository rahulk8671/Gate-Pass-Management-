import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Headerr from '../components/Headerr';
import { Affix, Button } from 'antd';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                
                    <Headerr />
                
                
                <Component {...props}/>
            </div>
            
        ) : (
            <Redirect to="/"/>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);