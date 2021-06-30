import React from 'react';
import UserCircle from '../userCircle/UserCircle';
import Photo from '../../img/ja.jpg'
import { Input } from './CommentSectionStyles'

const CommentSection = () => {
    return (
        <div style={{ display: 'flex', padding: '1rem 0 .5rem 0', borderTop: '1px solid lightgray'}}>
            <UserCircle w="35px" photo={Photo} />
            <Input placeholder="Write a comment..." />
        </div>
    );
};



export default CommentSection;
