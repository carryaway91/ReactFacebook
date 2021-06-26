import React from 'react';
import styled from 'styled-components';
import FullLike from '../interactionPanel/icons/FullLike';
import Heart from '../interactionPanel/icons/Heart';
import Laugh from '../interactionPanel/icons/Laugh';


const Emojies = props => {
    return (
        <EmojiPanel onClick={(e) => e.stopPropagation()}>
            <EmojiContainer onClick={() => props.choose('fullLike')}>
                <FullLike w={props.w} />
            </EmojiContainer>
            <EmojiContainer onClick={() => props.choose('heart')}>
                <Heart w={props.w} />
            </EmojiContainer>
            <EmojiContainer onClick={() => props.choose('laugh')}>
                <Laugh w={props.w} />
            </EmojiContainer>
        </EmojiPanel>
    );
};

const EmojiPanel = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    background: white;
    border: 1px solid lightgray;
    padding: .2rem 1rem;
    top: -2.5rem;
    left: 0;
    border-radius: 2rem
`

const EmojiContainer = styled.div`
    margin: 0 .2rem;
    transition: all .1s ease-in-out;

    &:hover {
        transform: scale(1.2)
    }
`

export default Emojies;
