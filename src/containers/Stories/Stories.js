import styled, { keyframes } from "styled-components";
import LeftStoryPanel from "../../components/LeftStoryPanel/LeftStoryPanel"
import { useState, useEffect } from "react";
import { data } from '../../api/api'
import { useParams } from 'react-router-dom'


const Stories = () => {
    const { id } = useParams()

    const [friendsWithStories, setFriendsWithStories] = useState()
    const [userWithStory, setUserWithStory] = useState()

    useEffect(() => {
        let friends = data.user.friends.filter(f => f.story)
        let user = friends.filter(s => s.story.id == id)
        
        setFriendsWithStories(friends)
        setUserWithStory(user[0])
    },[id])


    return (
        <Container>
            <LeftStoryPanel friends={friendsWithStories && friendsWithStories} />
            <RightPanel>
                <Story>
                    {
                        userWithStory 
                        ? 
                        <Img src={userWithStory && userWithStory.story.story} />
                        :
                        <div style={{width: '100%', height: '100%', background: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '.3rem'}}>
                            Create new story
                        </div>
                    }
                </Story>
            </RightPanel>
        </Container>
    );
};

    const Container = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 100000000000;
        display: flex;
    `
    
    const RightPanel = styled.div`
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    
    const storyAnimation = keyframes`
        0% { height: 0px; width: 0px; }
        100% { width: 300px; height: 80vh }
    `
    const Story = styled.div`
        position: relative;
        left: 12%;
        border-radius: .5rem;
        width: 300px;
        height: 80vh;
        z-index: 200000000000000000;
        animation: ${storyAnimation} .5s 
    `
    
    const Img = styled.img`
        border-radius: .5rem;
        width: 100%;
        height: 100%;
        object-fit: cover
`


export default Stories;
