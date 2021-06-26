import styled from "styled-components";
import Photo from '../../img/teta.jpg'
import UserCircle from "../userCircle/UserCircle";

const UserContextWindow = props => {
    return (
        <PostContainer onMouseEnter={props.show} onMouseLeave={props.hide} style={{ top: props.top}}>
            <UserCircle w="90px" photo={Photo} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginLeft: '.5rem'}}>
                <h2 style={{ margin: '0 0 .2rem 0'}}>Contact</h2>
                <p style={{ margin: 0}}>Works at a cool place</p>
                <p style={{ margin: 0}}>Studied on a university</p>
            </div>
        </PostContainer>
    );
};

const PostContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    width: 320px;
    left: -21.9rem;
    padding: 1rem;
    right: 300px;
    background: white;
    border-radius: .3rem;
    box-shadow: 1px 0 3px 0 lightgray;
    z-index: 100
`

export default UserContextWindow;
