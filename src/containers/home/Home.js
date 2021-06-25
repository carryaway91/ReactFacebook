import styled from "styled-components"
import NewPost from "../../components/newPost/NewPost"
import Post from "../../components/post/Post"
import Stories from "../../components/stories/Stories"
import Livia from '../../img/baba.jpg'
import PostContainer from "../../UI/postContainer/PostContainer"


const Home = () => {


    return (
        <div>
            <div style={{ marginBottom: '1.7rem'}}>
                <Stories />

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', 
                            alignItems: 'center', flexDirection: 'column', margin: '0 auto', width: '80%'}}>
                <PostContainer w="82.4%">
                    <NewPost />
                </PostContainer>
                <div style={{ width: '82.4%'}}>

                    {
                        [...Array(5)].map(p => (
                            <Post username="Livia" 
                            photo={Livia}
                            />
                            
                            ))
                    }
                </div>
                
            </div>
        </div>
    )
}



export default Home