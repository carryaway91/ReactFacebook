import styled from "styled-components"
import Message from '../../img/message.png'
const NewMessageIcon = () => {
    return (
        <Icon>
            <img src={Message} style={{ objectFit: 'cover'}} width="20" height="20"/>
        </Icon>
    )
}

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    border-radius: 50%;
    padding: .5rem;
    transition: all .2s ease-in-out;
    
    &:hover {
        background: #ddd;
        cursor: pointer;
    }
`
export default NewMessageIcon