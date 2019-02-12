import React from 'react';
import { Row, Col, Spin} from 'antd';
import ExpenseListFilters from './ExpenseListFilters';
import GatePassList from './GatePassList';

const ExpenseDashboardPage = () => (
  <div>
  <Row justify="space-around" type="flex" align="middle">
    <Col span={4}></Col>
    <Col span={16}>
    <ExpenseListFilters />
    <GatePassList />
    </Col>
    <Col span={4}></Col>
  </Row>
  </div>
);

export default ExpenseDashboardPage;
