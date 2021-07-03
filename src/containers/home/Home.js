import NewPost from "../../components/newPost/NewPost"
import Post from "../../components/post/Post"
import Stories from "../../components/stories/Stories"
import Livia from '../../img/baba.jpg'
import PostContainer from "../../UI/postContainer/PostContainer"
import { Content, PostsContent } from "./Homestyles"
import { data } from '../../api/api' 

const Home = props => {
    

    return (
            <Content>
                <Stories />

                <PostsContent>
                    <PostContainer w="100%">
                        <NewPost />
                    </PostContainer>
                        {
                            props.friends && props.friends.map((p, i) => (
                                <Post key={i} user={props.friends && props.friends[i]} 
                                photo={Livia}
                                />
                                
                                ))
                            }
                    
                </PostsContent>
            </Content>
    )
}


export default Home