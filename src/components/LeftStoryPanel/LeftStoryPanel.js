import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../components/Logo/Logo';
import InfoContainer from '../../components/nav/userSection/UI/InfoContainer';
import UserCircle from '../../components/userCircle/UserCircle';
import Photo from '../../img/baba.jpg'

const LeftStoryPanel = () => {
    const [stories, setStories] = useState([...Array(8)])

    return (
        <Container>
            <LeftPanel>

                <div style={{ display: 'flex', alignItems: 'center', padding: '.3rem', borderBottom: '1px solid #ddd', padding: '.5rem 0'}}>
                    <Cancel>
                       <Link to="/home" style={{ textDecoration: 'none', color: 'white'}}>
                        +
                       </Link>
                    </Cancel>
                    <div style={{ position: 'relative', top: '-7px', marginLeft: '.3rem'}}>
                        <Logo />
                    </div>
                </div>

                <div style={{ overflowY: 'scroll', height: '90%' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 1rem'}}>
                        <h2>Stories</h2>
                        <div>
                            <a href="#" style={{ textDecoration: 'none'}}>Archive</a>
                            <span style={{margin: '0 .5rem', position: 'relative', bottom: '3px'}}>.</span>
                            <a href="#" style={{ textDecoration: 'none'}}>Settings</a>
                        </div>

                    </div>
                    <div style={{ padding: '0 1rem' }}>
                        <h3>Your story</h3>
                            <div style={{ position: 'relative', left: '-8px'}}>
                                <InfoContainer>
                                    <Create><span style={{ position: 'relative', bottom: '5px'}}>+</span></Create>
                                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '.5rem'}}>
                                        <h5 style={{ margin: 0}}>Create a story</h5>
                                        <p style={{ margin: 0, fontSize: '.8rem'}}>Share a photo or write something</p>
                                    </div>
                                </InfoContainer>
                            </div>
                            <h3>All stories</h3>
                            <div style={{ position: 'relative', left: '-8px'}}>
                                {
                                    stories && stories.map(s => (
                                        <InfoContainer>
                                            <UserCircle w="60px" photo={Photo} />
                                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '.5rem'}}>
                                                <h5 style={{ margin: 0}}>Contact</h5>
                                                <p style={{ margin: 0}}><span style={{ color: 'blue'}}>1 new</span>
                                                <span style={{ position: 'relative', bottom: '3px', margin: '0 .4rem'}}>.</span>9h</p>
                                            </div>
                                        </InfoContainer>
                                    ))
                                }
                            </div>
                    </div>
                </div>
            </LeftPanel>
            <RightPanel>

            </RightPanel>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100000000000;
    display: flex
`

const LeftPanel = styled.div`
    background: white;
    width: 360px;
    overflow: hidden;
`

const RightPanel = styled.div`
    flex: 3;
    background: black
`

const Cancel = styled.button`
    position: relative;
    left: 10px;
    border: none;
    border-radius: 50%;
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #888;
    font-size: 3rem;
    font-weight: 100;
    width: 2.6rem;
    height: 2.6rem;
    transform: rotate(45deg);

    &:hover {
        cursor: pointer;
        background: #777;
    }
`

const Create = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: blue;
    background: #eee;
    width: 60px;
    height: 60px;
    font-size: 3rem
`


export default LeftStoryPanel;
