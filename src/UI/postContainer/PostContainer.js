import React from 'react';
import styled from 'styled-components';


const PostContainer = props => {
    return (
        <Post style={{ width: props.w}}>
            { props.children }
        </Post>
    );
};

const Post = styled.div`
    box-sizing: border-box;
    position: relative;
    min-height: 123px;
    background: white;
    border-radius: .5rem;
    box-shadow: 0 1px 2px 0px lightgray;
    padding: .8rem 1rem .3rem 1rem
`

export default PostContainer;
