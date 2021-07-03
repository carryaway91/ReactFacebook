import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostContainer from '../../UI/postContainer/PostContainer';
import CommentSection from '../commentSection/CommentSection';
import FullLike from '../interactionPanel/icons/FullLike';
import Heart from '../interactionPanel/icons/Heart';
import Laugh from '../interactionPanel/icons/Laugh';
import InteractionPanel from '../interactionPanel/InteractionPanel';
import World from './WorldSvg'
import { Container, Dot, ImageHolder, Image, EmojiContainer } from './PostStyles';
import UserCircle from '../userCircle/UserCircle';

const Post = props => {
    const [commentSection, setCommentSection] = useState(false)
    const [emoji, setEmoji] = useState('')

    return (
        <Container>
            <PostContainer w="100%">
                <div style={{ display: 'flex'}}>
                    <Link to={`/profile/${props.user && props.user.slug}`}>
                        <UserCircle photo={props.user && props.user.photo} w="32px" online storyID={props.user && props.user.story} size="xs"/>
                    </Link>
                    
                    <div style={{ diplay: 'flex', flexDirection: 'column', marginLeft: '.8rem'}}>
                    <Link to={`/profile/${props.user && props.user.slug}`} style={{ color: 'black', textDecoration: 'none'}}>
                        { props.user && props.user.fName + ' ' + props.user.lName }
                    </Link>
                        <p style={{ color: '#777', margin: 0, display: 'flex'}}>2h <Dot>.</Dot>
                        <span style={{ position: 'relative', top: '0px'}}><abbr title="Public"><World></World></abbr></span></p>
                   </div>
                </div>
                <p>
                    { props.user && props.user.posts[0].text}
                </p>
                <ImageHolder>
                    {
                        <Image src={props.user && props.user.posts[0].photo} />
                    }
                </ImageHolder>
                {
                    emoji && (
                        <EmojiContainer>
                            {
                                emoji === '' && null
                            }
                            { 
                                emoji === 'fullLike' && ( <div className="emoji"><FullLike w="20" /> &nbsp;Peter Babej </div> )
                            }
                            { 
                                emoji === 'heart' && ( <div className="emoji"><Heart w="20" /> &nbsp;Peter Babej </div> )
                            }
                            { 
                                emoji === 'laugh' && ( <div className="emoji"><Laugh w="20" /> &nbsp;Peter Babej </div> )
                            }
                        </EmojiContainer>
                    )
                }
                <InteractionPanel clicked={() => setCommentSection(!commentSection) } emoji={(e) => setEmoji(e)}/>
                {
                    commentSection && <CommentSection />
                }
            </PostContainer>

        </Container>
    );
};

export default Post;
