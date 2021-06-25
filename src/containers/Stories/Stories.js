import styled, { keyframes } from "styled-components";
import LeftStoryPanel from "../../components/LeftStoryPanel/LeftStoryPanel"


const Stories = () => {

    return (
        <Container>
            <LeftStoryPanel />
            <RightPanel>
                <Story>
                    <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
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
