import React, { useEffect } from 'react';
import styled from 'styled-components';
import Share from '../interactionPanel/icons/Share';
import Message from '../../img/message.png'

const ShareContext = () => {

    useEffect(() => {
        document.addEventListener('click', () => {
            let window = document.getElementById('share')

            if(window) {
                window.style.display = 'none'
            }
        })
    }, [document.getElementById('share')])

    return (
        <Context id="share" onClick={e => e.stopPropagation()}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0}}>
                <Li>
                    <Share />
                    <span>Share now (Friends)</span>
                </Li>
                <Li>
                    <img src={Message} style={{ objectFit: 'cover'}} width="20" height="20"/>
                    <span>Share to News Feed</span>
                </Li>
              
            </ul>
        </Context>
    );
};

const Context = styled.div`
    padding: 1rem;
    width: 300px;
    position: absolute;
    background: white;
    border-radius: .4rem;
    z-index: 1000;
    top: 3rem;
    box-shadow: 0 0 7px 2px lightgray
`

const Li = styled.li`
    border-radius: .3rem;
    display: flex;
    align-items: center;
    padding: .4rem;

    &:hover {
        background: #ddd
    }
`

export default ShareContext;
