import { createStore, combineReducers } from 'redux';
//import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import gatepass from '../reducers/gatepass';

export default () => {
  const store = createStore(
    combineReducers({
      //expenses: expensesReducer,
      filters: filtersReducer,
      gatepass: gatepass
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
