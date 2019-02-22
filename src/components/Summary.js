import React from 'react';
import { connect } from 'react-redux';
import selectGatePasses from '../selectors/gatepasses';

export const Summary = ({total}) => {
    const word = total === 1 ? 'gatepass' : 'gatepasses';

    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="summary-title">Viewing {total} {word}</h2>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleGatepasses = selectGatePasses(state.gatepass, state.filters);

    return {
        total: visibleGatepasses.length
    }
}

export default connect(mapStateToProps)(Summary);