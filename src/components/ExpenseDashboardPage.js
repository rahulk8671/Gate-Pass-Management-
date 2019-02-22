import React from 'react';
import { Row, Col, Spin} from 'antd';
import ExpenseListFilters from './ExpenseListFilters';
import GatePassList from './GatePassList';
import Summary from './Summary';

const ExpenseDashboardPage = () => (
  <div>
    <Summary />
    <ExpenseListFilters />
    <GatePassList />
  </div>
);

export default ExpenseDashboardPage;
