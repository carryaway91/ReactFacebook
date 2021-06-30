import LeftStoryPanel from "../../components/LeftStoryPanel/LeftStoryPanel"
import { useState, useEffect } from "react";
import { data } from '../../api/api'
import { useParams } from 'react-router-dom'
import Cancel from "../../components/LeftStoryPanel/UI/Cancel"; 
import { Container, RightPanel, Story, Img, CancelContainer  } from "./StoriesStyles";

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
                <CancelContainer>
                    <Cancel />
                </CancelContainer>
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

export default Stories;
