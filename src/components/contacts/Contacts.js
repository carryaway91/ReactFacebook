import React, { useState, useEffect } from 'react';
import Contact from './contact/Contact';

const Contacts = props => {
    

    return (
        <div>
            <h3 style={{ color: '#666', fontWeight: 600}}>Contacts</h3>
            <ul style={{ padding: 0, marginLeft: '-.5rem', height: '75vh'}}>
                {
                    props.friends && props.friends.map(f => <Contact friend={f} open={props.open} show={props.show} hide={props.hide} /> )
                }
            </ul>
        </div>
    );
};


export default Contacts;
