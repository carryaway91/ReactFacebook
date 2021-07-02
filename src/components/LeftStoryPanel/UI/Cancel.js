import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { CancelContainer } from './CancelStyles';
const Cancel = props => {
    return (
        <CancelContainer>
            <div onClick={() => props.history.goBack()}style={{ textDecoration: 'none', color: 'white'}}>
            +
            </div>
        </CancelContainer>
    );
};

export default withRouter(Cancel);
