import React, { useRef } from 'react';
import UserCircle from '../../userCircle/UserCircle';
import { ContactItem } from './ContactStyles';
const Contact = props => {
    const Item = useRef(null)

    const handleShowTop = () => {
        props.show(Item.current.getBoundingClientRect().y, props.friend)
    }


    return (
        <ContactItem onClick={() => props.open(props.friend)} onMouseEnter={handleShowTop} onMouseLeave={props.hide} ref={Item}>
            <UserCircle photo={props.friend.photo} w="30px" online={true} storyID={props.friend && props.friend.story} size="xs"/>

            <h3 style={{ margin: 0, paddingLeft: '.5rem', fontSize: '1rem', fontWeight: 600}}>{ props.friend.fName + ' ' + props.friend.lName }</h3>
            
        </ContactItem>
    );
};




export default Contact;
