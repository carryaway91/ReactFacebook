import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PostContainer from '../../UI/postContainer/PostContainer';
import CommentSection from '../commentSection/CommentSection';
import FullLike from '../interactionPanel/icons/FullLike';
import Heart from '../interactionPanel/icons/Heart';
import Laugh from '../interactionPanel/icons/Laugh';
import InteractionPanel from '../interactionPanel/InteractionPanel';
import World from './WorldSvg'

const Post = props => {
    const [commentSection, setCommentSection] = useState(false)
    const [emoji, setEmoji] = useState('')

    return (
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <PostContainer w="100%">
                <div style={{ display: 'flex'}}>
                    <Link to={`/profile/${props.user && props.user.slug}`}>
                        <Img src={props.user && props.user.photo} />
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
                <InnerContainer>
                    {
                        <Image src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                    }
                </InnerContainer>
                {
                    emoji && (
                        <div style={{ marginBottom: '.2rem', paddingBottom: '.5rem', borderBottom: '1px solid lightgray'}}>
                            {
                                emoji == '' && null
                            }
                            { 
                                emoji == 'fullLike' && ( <div style={{ display: 'flex', alignItems:'center'}}><FullLike w="20" /> &nbsp;Peter Babej </div> )
                            }
                            { 
                                emoji == 'heart' && ( <div style={{ display: 'flex', alignItems:'center'}}><Heart w="20" /> &nbsp;Peter Babej </div> )
                            }
                            { 
                                emoji == 'laugh' && ( <div style={{ display: 'flex', alignItems:'center'}}><Laugh w="20" /> &nbsp;Peter Babej </div> )
                            }
                        </div>
                    )
                }
                <InteractionPanel clicked={() => setCommentSection(!commentSection) } emoji={(e) => setEmoji(e)}/>
                {
                    commentSection && <CommentSection />
                }
            </PostContainer>

        </div>
    );
};

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const Dot = styled.span`
    position: relative;
    bottom: 3px;
    margin: 0 .2rem
`
const InnerContainer = styled.div`
    position: relative;
    top: -7px;
    width: calc(100% + 2rem);
    left: -1rem;
`

const Image = styled.img`
    max-width: 100%
`

export default Post;
