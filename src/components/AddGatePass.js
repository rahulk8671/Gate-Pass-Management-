import React from 'react';
import { connect } from 'react-redux';
//import ExpenseForm from './ExpenseForm';
import { addGatePass } from '../actions/gatepasses';
import GatePassForm from './GatePassForm';

export class AddGatePass extends React.Component {
    onSubmit = (gatepass) => {
      this.props.addGatePass(gatepass);
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
    addGatePass: (gatepass) => dispatch(addGatePass(gatepass))
  });
  
  export default connect(undefined, mapDispatchToProps)(AddGatePass);