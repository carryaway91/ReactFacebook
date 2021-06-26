import React from 'react';
import Contact from './contact/Contact';

const Contacts = props => {
    return (
        <div>
            <h3 style={{ color: '#666', fontWeight: 600}}>Contacts</h3>
            <ul style={{ padding: 0, marginLeft: '-.5rem'}}>
                {
                    [...Array(15)].map(() => <Contact open={props.open} show={props.show} hide={props.hide} /> )
                }
            </ul>
        </div>
    );
};


export default Contacts;
