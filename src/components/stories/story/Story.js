import { Link } from "react-router-dom"
import styled from "styled-components"

const Story = props => {
    return (
        <Container>
            <Link to={`/story/${props.story && props.story.story.id}`}>
            { props.children }
            {
                props.photo 
                
                ? 
                <Img src={props.photo}/> 
                :
                <Img src={props.story.story.story}  /> 
            }
            
            {
                props.main && (
                    <Create>
                        <Plus>
                            <span style={{ position: 'relative', bottom: '4px', left: '1px'}}>+</span>
                        </Plus>
                        <p>Create Story</p>
                    </Create>
                )
            }
            </Link>
        </Container>
    )
}


const Container = styled.div`
    width: 112px;
    height: 189px;
    border-radius: .5rem;
    margin-right: .6rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &:hover {
        filter: grayscale(40%);
    }
    `
    
    const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: .5rem;
    transition: all .2s ease-in-out;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.1)
    }
`

const Create = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 50px;
background: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: .8rem;

&:hover {
    filter: grayscale(20%);
}
`

const Plus = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #0f92f3;
    position: absolute;
    bottom: 1.9rem;
    left: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    font-size: 3em;
    color: white;
    font-weight: 300;
    border: 4px solid white;
`

const Layout = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    border-radius: .5rem;
    background: black;
    opacity: 0.3;
    z-index: 11111;
    cursor: pointer
`
export default Story