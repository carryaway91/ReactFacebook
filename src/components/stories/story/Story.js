import { Link } from "react-router-dom"
import { Container, Img, Create, Plus} from "./StoryStyles"

const Story = props => {

    return (
        <Container>
            <Link to={props.story ? `/story/${props.story && props.story.story.id}` : `/story/create`} onClick={() => props.story && props.storiesSeen(props.story.story.id)}>
            { props.children }
            {
                props.photo 
                
                ? 
                <Img src={props.photo} /> 
                :
                <Img src={props.story.story.story}  /> 
            }
            
            {
                props.main && (
                    <Create>
                        <Plus>
                            <span style={{ position: 'relative', bottom: '4px', left: '0px'}}>+</span>
                        </Plus>
                        <p>Create Story</p>
                    </Create>
                )
            }
            </Link>
        </Container>
    )
}


export default Story