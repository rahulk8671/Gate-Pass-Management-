import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import gatepass from '../reducers/gatepass';
import auth from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      //expenses: expensesReducer,
      filters: filtersReducer,
      gatepass: gatepass,
      auth: auth 
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
