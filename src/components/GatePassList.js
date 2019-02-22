import React from 'react';
import { connect } from 'react-redux';
import GatePassListItem from './GatePassListItem';
import selectGatePasses from '../selectors/gatepasses';
import { Empty } from 'antd';

export const GatePassList = (props) => (
  <div className="content-container">
    {
      props.gatepasses.length === 0 ? (
        <div className="spcae"><Empty /></div>
      ) : (
          props.gatepasses.map((gatepass) => {
            return <GatePassListItem key={gatepass.id} {...gatepass} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    gatepasses: selectGatePasses(state.gatepass, state.filters)
  };
};

export default connect(mapStateToProps)(GatePassList);
