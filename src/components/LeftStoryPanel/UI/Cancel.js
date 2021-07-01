import React from 'react';
import { Link } from 'react-router-dom'
import { CancelContainer } from './CancelStyles';
const Cancel = () => {
    return (
        <CancelContainer>
            <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
            +
            </Link>
        </CancelContainer>
    );
};

export default Cancel;
