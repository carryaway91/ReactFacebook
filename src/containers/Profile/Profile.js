import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import PostContainer from "../../UI/postContainer/PostContainer";
import Teta from '../../img/teta.jpg'
import NewPost from "../../components/newPost/NewPost";
import Post from "../../components/post/Post";
import { data } from '../../api/api'
import { Header, Content, Cover, ProfileCircle, Img, FriendFrame, FrinedWrap } from './ProfileStyles';

const Profile = props => {
    const { slug } = useParams()
    const [currentUser, setCurrentUser] = useState()
    const [isItMe, setIsItMe] = useState(true)

    useEffect(() => {
        let profile = {}
        let isUser = data.user.slug == slug

        if(!isUser) {
           profile = data.user.friends.find(f => f.slug == slug)
           setCurrentUser(profile)
           setIsItMe(false)
        } else {
            setCurrentUser(data.user)
            setIsItMe(true)
        }
    }, [slug])

    return (
        <div style={{ width: '100%'}}>
            
            <div style={{ width: '100%', background: 'white', borderBottom: '1px solid lightgray'}}>
                <Header>
                    <Cover>
                        <ProfileCircle>
                            <Img src={currentUser && currentUser.photo} />
                         </ProfileCircle>    
                    </Cover>
                    <h1>{ currentUser && currentUser.fName + ' ' + currentUser.lName }</h1>
                </Header>
            </div>
            <div style={{ width: '100%', background: '#f0f2f5', padding: '1rem 0'}}>
                <Content>
                    <div style={{ flex: 2, marginRight: '1rem'}}>

                    <PostContainer w="100%">
                        <h2 style={{ margin: '0 0 1rem 0'}}>Intro</h2>
                        <p style={{ display: 'flex', justifyItems: 'center'}}>
                            <span>
                                <svg  height="30px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="30px" ><g><path d="M445.788,154.561L259.027,87.858c-1.957-0.699-4.098-0.699-6.055,0L66.212,154.561c-3.614,1.291-6.013,4.733-5.972,8.571   c0.04,3.838,2.511,7.229,6.152,8.443l75.642,25.221v87.9c0,4.012,2.655,7.54,6.512,8.649l104.966,30.203   c0.813,0.233,1.65,0.351,2.488,0.351s1.676-0.117,2.488-0.351l33.051-9.51c4.777-1.375,7.535-6.361,6.161-11.138   c-1.375-4.777-6.358-7.537-11.138-6.161L256,305.533l-95.966-27.613v-75.123l93.119,31.048c1.848,0.616,3.846,0.617,5.693,0   l16.72-5.574c0.002,0,0.003-0.001,0.005-0.002l14.083-4.695c4.715-1.572,7.264-6.669,5.691-11.385   c-1.573-4.715-6.669-7.265-11.385-5.691L256,215.82l-83.686-27.903l-75.499-25.173L256,105.89l159.185,56.854l-57.064,19.027   c-0.001,0-0.001,0-0.001,0l-7.043,2.348l-5.806,1.936c0,0-0.001,0-0.001,0l-9.002,3.001c-4.716,1.572-7.264,6.669-5.691,11.385   c1.572,4.715,6.667,7.26,11.385,5.691l10.005-3.336v75.123l-11.218,3.228c-4.777,1.375-7.535,6.361-6.161,11.138   c1.136,3.946,4.734,6.514,8.646,6.514c0.823,0,1.661-0.113,2.492-0.353l17.729-5.102c3.856-1.109,6.512-4.638,6.512-8.649v-87.9   l75.642-25.221c3.642-1.214,6.112-4.604,6.152-8.443C451.801,159.293,449.402,155.852,445.788,154.561z"/><path d="M325.213,204.986c-0.006-0.208-0.012-0.417-0.032-0.625c-0.015-0.151-0.041-0.298-0.063-0.447   c-0.021-0.14-0.036-0.279-0.063-0.417c-0.032-0.166-0.076-0.328-0.117-0.49c-0.031-0.12-0.058-0.241-0.093-0.36   c-0.048-0.16-0.105-0.314-0.161-0.47c-0.044-0.121-0.084-0.242-0.133-0.361c-0.058-0.142-0.125-0.278-0.189-0.416   c-0.061-0.129-0.119-0.26-0.187-0.387c-0.064-0.122-0.137-0.238-0.206-0.355c-0.08-0.135-0.158-0.271-0.245-0.403   c-0.073-0.11-0.154-0.215-0.233-0.323c-0.094-0.128-0.185-0.258-0.285-0.382c-0.097-0.118-0.201-0.229-0.303-0.341   c-0.094-0.104-0.183-0.21-0.281-0.31c-0.16-0.162-0.33-0.313-0.502-0.462c-0.048-0.042-0.09-0.087-0.139-0.128l-0.022-0.019   c-0.005-0.004-0.011-0.009-0.017-0.014l-60.186-50.075c-3.819-3.179-9.494-2.659-12.675,1.162   c-3.179,3.821-2.658,9.496,1.163,12.675l56.98,47.408v159.556c-9.988,2.052-17.522,10.91-17.522,21.496v12.225   c0,12.1,9.844,21.943,21.943,21.943h12.226c12.1,0,21.943-9.844,21.943-21.943v-12.225c0-11.645-9.119-21.195-20.59-21.897V205.271   c0-0.002,0-0.005,0-0.008v-0.037C325.225,205.146,325.215,205.067,325.213,204.986z M327.814,390.498v12.225   c0,2.175-1.769,3.943-3.943,3.943h-12.226c-2.175,0-3.943-1.769-3.943-3.943v-12.225c0-2.175,1.769-3.943,3.943-3.943h12.226   C326.046,386.555,327.814,388.323,327.814,390.498z"/></g></svg>
                            </span>
                            { currentUser && currentUser.school }
                        </p>
                        <p style={{ display: 'flex', justifyItems: 'center', marginTop: 0}}>
                            <span style={{ margin: '0 .4rem'}}>
                            <svg height="17px" viewBox="0 0 128 128" width="17px"><g id="OBJECT"><path d="M124,22.323H85.135V5.953c0-1.104-0.896-2-2-2H44.864c-1.104,0-2,0.896-2,2v16.371H4c-2.206,0-4,1.794-4,4v93.724   c0,2.206,1.794,4,4,4h120c2.206,0,4-1.794,4-4V26.323C128,24.118,126.206,22.323,124,22.323z M46.864,7.953h34.271v14.371H46.864   V7.953z M44.864,26.323h38.271H124l-0.001,18.711H4V26.323H44.864z M4,120.047V49.035h119.999l-0.004,71.012H4z M124,122.047v-2h0   L124,122.047z"/></g></svg>
                            </span>
                            { currentUser && currentUser.work }
                        </p>
                        <p style={{ display: 'flex', justifyItems: 'center'}}>
                            <span style={{ margin: '0 .3rem 0 .3rem'}}>
                                <svg viewBox="0 0 32 32" width="20px" height="20px"><path class="cls-1" d="M25,3.63A12.93,12.93,0,0,0,15.47,0,13.09,13.09,0,0,0,3,12.26c0,.33,0,.67,0,1a11.6,11.6,0,0,0,2.83,7.18L16,31.48,26.36,20.21A11.3,11.3,0,0,0,29,13,12.89,12.89,0,0,0,25,3.63ZM25.06,19,16,28.82,7.13,19.2a9.78,9.78,0,0,1-2.38-6q0-.43,0-.86A11.32,11.32,0,0,1,15.54,1.71H16A11.25,11.25,0,0,1,27.25,12.95,9.49,9.49,0,0,1,25.06,19Z"/><rect class="cls-1" height="2" width="10" x="11" y="11"/></svg>
                            </span>
                            { currentUser && currentUser.from }

                        </p>
                    </PostContainer>
                    
                    <div style={{ margin: '1rem 0'}}>
                        <PostContainer w="100%">
                            <h2 style={{ margin: '0 0 1rem 0'}}>Photos</h2>
                        </PostContainer>
                    </div>
                    <PostContainer w="100%">
                        <h2 style={{ margin: 0 }}>Friends</h2>
                        <p style={{ margin: '.3rem 0 1rem 0', color: "gray"}}>{currentUser && currentUser.friends.length} friends</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                            { currentUser && currentUser.friends.map(f => (
                                <FrinedWrap>
                                    <Link to={`/profile/${f.slug}`} style={{ color: 'black', textDecoration: 'none'}}>
                                        <FriendFrame src={Teta} />   
                                        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '.7rem', wordWrap:'wrap'}}>{ f.fName + ' ' + f.lName}</p>
                                    </Link>
                                </FrinedWrap>
                                ))}
                        </div>
                    </PostContainer>
                    </div>
                    <div style={{ flex: 3}}>
                    
                    {
                        isItMe && (
                            <PostContainer w="100%">
                                <NewPost />
                            </PostContainer>
                        )
                    }

                    { [...Array(4)].map(() => (
                        <div style={{ marginBottom: '1rem'}}>
                            <Post user={currentUser}/>
                        </div>
                    ))}
                    </div>
                </Content>
            </div>

        </div>
    );
};


export default Profile;
