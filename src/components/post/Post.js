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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Nunc aliquet 
                    bibendum enim facilisis gravida. Commodo nulla facilisi nullam vehicula. Iaculis eu non diam phasellus 
                    vestibulum lorem sed risus ultricies. In hendrerit gravida rutrum quisque non tellus orci ac. Morbi leo urna 
                    molestie at elementum. Ipsum dolor sit amet consectetur adipiscing elit. In mollis nunc sed id. Eros donec ac odio 
                    tempor orci dapibus ultrices in iaculis.
                </p>
                <ImageHolder>
                    {
                        <Image src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
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
