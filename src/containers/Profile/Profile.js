import styled from "styled-components";
import Photo from '../../img/ja.jpg'
import PostContainer from "../../UI/postContainer/PostContainer";
import Teta from '../../img/teta.jpg'
import NewPost from "../../components/newPost/NewPost";
import Post from "../../components/post/Post";


const Profile = () => {
    return (
        <div style={{ width: '100%'}}>

            <div style={{ width: '100%', background: 'white', borderBottom: '1px solid lightgray'}}>
                <Header>
                    <Cover>
                        <ProfileCircle src={Photo} />
                    </Cover>
                    <h1>Peter Babej</h1>
                </Header>
            </div>
            <div style={{ width: '100%', background: '#f0f2f5', padding: '1rem 0'}}>
                <Content>
                    <div style={{ flex: 2, marginRight: '1rem'}}>

                    <PostContainer w="100%">
                        <h2 style={{ margin: '0 0 1rem 0'}}>Intro</h2>
                        <p>Hi my name is Peter and I'm a wannabe webdeveloper</p>
                    </PostContainer>
                    
                    <div style={{ margin: '1rem 0'}}>
                        <PostContainer w="100%">
                            <h2 style={{ margin: '0 0 1rem 0'}}>Photos</h2>
                        </PostContainer>
                    </div>
                    <PostContainer w="100%">
                        <h2 style={{ margin: 0 }}>Friends</h2>
                        <p style={{ margin: '.3rem 0 1rem 0', color: "gray"}}>9 friends</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                            { [...Array(9)].map(() => (
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>
                                    <FriendFrame src={Teta} />   
                                    <p style={{ margin: 0, fontWeight: 'bold', fontSize: '.7rem'}}>Contact</p>
                                </div>
                                ))}
                        </div>
                    </PostContainer>
                    </div>
                    <div style={{ flex: 3}}>

                    <PostContainer w="100%">
                        <NewPost />
                    </PostContainer>

                    { [...Array(4)].map(() => (
                        <div style={{ marginTop: '1rem'}}>
                            <Post photo={Photo} username="Peter Babej"/>
                        </div>
                    ))}
                    </div>
                </Content>
            </div>

        </div>
    );
};

const Header = styled.div`
width: 940px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column
`

const Content = styled.div`
display: flex;
width: 900px;
margin: 0 auto
`
const Cover = styled.div`
    position: relative;
    width: 100%;
    height: 347px;
    border-radius: 0 0 .5rem .5rem;
    background: linear-gradient(180deg, #fff 0%, #999 100%);
`

const ProfileCircle = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 3px solid white;
    position: absolute;
    bottom: -20px;
    left: calc(50% - 91px)
`

const FriendFrame = styled.img`
    width: 101px;
    height: 102px;
    object-fit: cover;
    border-radius: .5rem;
`

export default Profile;
