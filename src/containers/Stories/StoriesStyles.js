import styled, { keyframes } from "styled-components"
import { devices } from "../../media"

export const Container = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 100000000000;
display: flex;
`

export const RightPanel = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`

const storyAnimation = keyframes`
0% { height: 0px; width: 0px; }
100% { width: 300px; height: 80vh }
`
export const Story = styled.div`
position: relative;
left: 12%;
border-radius: .5rem;
width: 300px;
height: 80vh;
z-index: 200000000000000000;
background: white;
animation: ${storyAnimation} .5s;

${devices.mobile} {
    left: 0;
}

${devices.xs} {
    width: 80%;
}
`

export const Img = styled.img`
border-radius: .5rem;
width: 100%;
height: 100%;
object-fit: contain
`
export const CancelContainer = styled.div`
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    
    ${devices.mobile} {
        z-index: 10000000000000000;
        display: block
    }
`