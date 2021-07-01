import PostContainer from "../../../UI/postContainer/PostContainer";
import UserCircle from "../../../components/userCircle/UserCircle";
import Photo from '../../../img/stories/sakura.jpg'
import { TitleContainer, Title, Circle, IFrame } from "./WatchStyles";

const Watch = () => {
    return (
        <div style={{ padding: '1rem'}}>
            {
                [...Array(5)].map((v, i) => (
                    <PostContainer>
                        <TitleContainer>
                            <Circle>
                                <UserCircle w="50" photo={Photo} />
                            </Circle>
                            <Title>
                                <h4>Video { i }</h4>
                                <p>June 29 at 3:29 AM</p>  
                            </Title>
                        </TitleContainer>
                        <IFrame  src="https://www.youtube.com/embed/D3auRa5pUbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IFrame>
                    </PostContainer>
                ))
            }
           
        </div>
    );
};


export default Watch;
