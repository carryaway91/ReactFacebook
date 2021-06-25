import React from 'react';
import Ad from './ad/Ad';


const AdPanel = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <h3 style={{ color: '#666', fontWeight: 600, marginTop: '.7rem' }}>Sponsored</h3>
            <Ad />
            <Ad />
        </div>
    );
};



export default AdPanel;
