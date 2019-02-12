import React from 'react';
import { connect } from 'react-redux';
//import ExpenseForm from './ExpenseForm';
import { startAddGatepass } from '../actions/gatepasses';
import GatePassForm from './GatePassForm';

export class AddGatePass extends React.Component {
    onSubmit = (gatepass) => {
      //console.log(gatepass);
      this.props.startAddGatepass(gatepass)//.then(() => console.log('hi'));
      this.props.history.push('/');
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