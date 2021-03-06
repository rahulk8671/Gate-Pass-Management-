import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { startSetGatePasses } from './actions/gatepasses';
import 'antd/dist/antd.css';
import indi from '../public/images/indi';
import { firebase } from'./firebase/firebase';

const store = configureStore();

//store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
//store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
//store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
//store.dispatch(addGatePass({ Name: 'rahul', MobileNO: '8220405182', PassNo: '21', createdAt: 40000, createdAtTime: 400000, ToMeet: 'mudit sir', Purpose: 'trainee', Address: 'sec 22'}));

const state = store.getState();
// console.log(state);
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
  if (user) { 
    store.dispatch(login(user.uid));
    store.dispatch(startSetGatePasses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp()
    history.push('/');
  }
});