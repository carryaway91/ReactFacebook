import styled from "styled-components";

const UserContextWindow = () => {
    return (
        <PostContainer w="50px">
            User
        </PostContainer>
    );
};

const PostContainer = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    right: 230px;
    background: white;

`

export default UserContextWindow;
