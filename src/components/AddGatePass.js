import React from 'react';
import { connect } from 'react-redux';
//import ExpenseForm from './ExpenseForm';
import { startAddGatepass } from '../actions/gatepasses';
import GatePassForm from './GatePassForm';
import { Switch, message } from 'antd';

export class AddGatePass extends React.Component {
    onSubmit = (gatepass) => {
      //console.log(gatepass);
      message.loading('Action in process', this.props.startAddGatepass(gatepass)).then(() => message.success('success'));
      this.props.history.push('/dashboard');
    };
    render() {
      return (          
          <GatePassForm
            onSubmit={this.onSubmit}
          />
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    startAddGatepass: (gatepass) => dispatch(startAddGatepass(gatepass))
  });
  
  export default connect(undefined, mapDispatchToProps)(AddGatePass);