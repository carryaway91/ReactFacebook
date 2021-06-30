import { NavLink, Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import InfoContainer from '../../components/nav/userSection/UI/InfoContainer';
import UserCircle from '../../components/userCircle/UserCircle';
import Cancel from './UI/Cancel'
import { Container, LeftPanel, RightPanel, Create } from './LeftStoryPanelStyles';
const LeftStoryPanel = props => {

    return (
        <Container>
            <LeftPanel>

                <div style={{ display: 'flex', alignItems: 'center', padding: '.3rem', borderBottom: '1px solid #ddd', padding: '.5rem 0'}}>
                    <Cancel/>
                    <div style={{ position: 'relative', top: '-7px', marginLeft: '.3rem'}}>
                        <Logo />
                    </div>
                </div>

                <div style={{ overflowY: 'scroll', height: '90%' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 1rem'}}>
                        <h2>Stories</h2>
                        <div>
                            <a href="#" style={{ textDecoration: 'none'}}>Archive</a>
                            <span style={{margin: '0 .5rem', position: 'relative', bottom: '3px'}}>.</span>
                            <a href="#" style={{ textDecoration: 'none'}}>Settings</a>
                        </div>

                    </div>
                    <div style={{ padding: '0 1rem' }}>
                        <h3>Your story</h3>
                            <div style={{ position: 'relative', left: '-8px'}}>
                                <NavLink to={`/story/create`} style={{ textDecoration: 'none'}}>
                                    <InfoContainer>
                                        <Create><span style={{ position: 'relative', bottom: '5px'}}>+</span></Create>
                                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '.5rem'}}>
                                            <h5 style={{ margin: 0, color: 'black'}}>Create a story</h5>
                                            <p style={{ margin: 0, fontSize: '.8rem', color: 'gray'}}>Share a photo or write something</p>
                                        </div>
                                    </InfoContainer>
                                </NavLink>
                            </div>
                            <h3>All stories</h3>
                            <div style={{ position: 'relative', left: '-8px'}}>
                                {
                                    props.friends && props.friends.map(f => (
                                        <div>
                                            <NavLink style={{textDecoration: 'none', display: 'flex', width: '100%', padding: '.5rem', borderRadius: '.3rem'}} activeStyle={{ background: '#ddd'}} to={`/story/${f.story.id}`}>
                                                <UserCircle w="60px" photo={f.photo} />
                                                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '.5rem'}}>
                                                    <h5 style={{ margin: 0, color: 'black'}}>{ f.fName + ' ' + f.lName }</h5>
                                                    <p style={{ margin: 0}}><span style={{ color: 'blue'}}>1 new</span>
                                                    <span style={{ position: 'relative', bottom: '3px', margin: '0 .4rem'}}>.</span><span style={{ color: 'gray'}}>9h</span></p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    ))
                                }
                            </div>
                    </div>
                </div>
            </LeftPanel>
            <RightPanel>

            </RightPanel>
        </Container>
    );
};

export default LeftStoryPanel;
