import React from 'react';
import Contact from './contact/Contact';

const Contacts = props => {
    return (
        <div>
            <h3 style={{ color: '#666', fontWeight: 600}}>Contacts</h3>
            <ul style={{ padding: 0, marginLeft: '-.5rem'}}>
                <Contact open={props.open}  />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
                <Contact open={props.open} />
            </ul>
        </div>
    );
};


export default Contacts;
