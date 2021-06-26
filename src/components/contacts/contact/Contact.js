import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Photo from '../../../img/teta.jpg'
import UserCircle from '../../userCircle/UserCircle';
import UserContextWindow from '../../userContextWindow/UserContextWindow';

const Contact = props => {
    const Item = useRef(null)

    const handleShowTop = () => {
        props.show(Item.current.getBoundingClientRect().y)
    }


    return (
        <ContactItem onClick={props.open} onMouseEnter={handleShowTop} onMouseLeave={props.hide} ref={Item}>
            <UserCircle photo={Photo} w="30px" online={true} />

            <h3 style={{ margin: 0, paddingLeft: '.5rem', fontSize: '1rem', fontWeight: 600}}>Contact</h3>
            
        </ContactItem>
    );
};

const ContactItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0.5rem;
    border-radius: .3rem;
    cursor: pointer;
    position: relative;
    
    &:hover {
        background: #ddd
    }
`


export default Contact;
