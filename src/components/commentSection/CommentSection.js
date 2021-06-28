import React from 'react';
import UserCircle from '../userCircle/UserCircle';
import Photo from '../../img/ja.jpg'
import styled from 'styled-components';

const CommentSection = () => {
    return (
        <div style={{ display: 'flex', padding: '1rem 0 .5rem 0', borderTop: '1px solid lightgray'}}>
            <UserCircle w="35px" photo={Photo} />
            <Input placeholder="Write a comment..." />
        </div>
    );
};

const Input = styled.input`
    background: #eee;
    padding: .2rem 1rem;
    border-radius: 2rem;
    width: 100%;
    margin-left: 1rem;
    outline: none;
    border: none
`


export default CommentSection;
