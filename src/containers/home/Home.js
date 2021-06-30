import NewPost from "../../components/newPost/NewPost"
import Post from "../../components/post/Post"
import Stories from "../../components/stories/Stories"
import Livia from '../../img/baba.jpg'
import PostContainer from "../../UI/postContainer/PostContainer"
import { Content, PostsContent } from "./Homestyles"

const Home = props => {

    return (
            <Content>
                <Stories />

                <PostsContent>
                    <PostContainer w="100%">
                        <NewPost />
                    </PostContainer>
                        {
                            [...Array(3)].map((p, i) => (
                                <Post user={props.friends && props.friends[i]} 
                                photo={Livia}
                                />
                                
                                ))
                            }
                    
                </PostsContent>
            </Content>
    )
}


export default Home