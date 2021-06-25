import React from 'react';
import styled from 'styled-components';
import PostContainer from '../../UI/postContainer/PostContainer';
import InteractionPanel from '../interactionPanel/InteractionPanel';
import World from './WorldSvg'

const Post = props => {

    return (
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <PostContainer w="100%">
                <div style={{ display: 'flex'}}>
                    <Img src={props.photo} />
                    <div style={{ diplay: 'flex', flexDirection: 'column', marginLeft: '.8rem'}}>
                        { props.username }
                        <p style={{ color: '#777', margin: 0, display: 'flex'}}>2h <Dot>.</Dot>
                        <span style={{ position: 'relative', top: '0px'}}><abbr title="Public"><World></World></abbr></span></p>
                   </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Nunc aliquet 
                    bibendum enim facilisis gravida. Commodo nulla facilisi nullam vehicula. Iaculis eu non diam phasellus 
                    vestibulum lorem sed risus ultricies. In hendrerit gravida rutrum quisque non tellus orci ac. Morbi leo urna 
                    molestie at elementum. Ipsum dolor sit amet consectetur adipiscing elit. In mollis nunc sed id. Eros donec ac odio 
                    tempor orci dapibus ultrices in iaculis.
                </p>
                <InnerContainer>
                    {
                        <Image src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                    }
                </InnerContainer>
                <InteractionPanel />
            </PostContainer>

        </div>
    );
};

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const Dot = styled.span`
    position: relative;
    bottom: 3px;
    margin: 0 .2rem
`
const InnerContainer = styled.div`
    position: relative;
    top: -7px;
    width: calc(100% + 2rem);
    left: -1rem;
`

const Image = styled.img`
    max-width: 100%
`

export default Post;
