import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import AdPanel from '../../components/adPanel/AdPanel';
import AsideNav from '../../components/asideNav/AsideNav';
import Contacts from '../../components/contacts/Contacts';
import Home from '../home/Home';
import Stories from '../Stories/Stories';
import Bookmarks from '../Bookmarks/Bookmarks';
import Friends from '../Friends/Friends'
import UserContextWindow from '../../components/userContextWindow/UserContextWindow';
import { Main, LeftPanel, RightPanel,RightPanelWrap } from './DashboardStyles';
import Pages from '../Pages/Pages';
import Watch from './Watch/Watch';
import Groups from './Groups/Groups';
import { withRouter } from 'react-router-dom';


const Dashboard = props => {
    const [userContext, setUserContext] = useState(false)
    const [top, setTop] = useState(0)
    const [userData, setUserData] = useState()

    const handleShowUserContext = (top, user) => {
        if(top < 75) {
            setTop(10)
        } else {
            setTop(top - 90)
        }
        setUserContext(true)
        setUserData(user)
    }


    return (
        <div style={{ display: 'flex', height: 'calc(100vh - 54px)', overflowY: 'hidden', background: '#f0f2f5', position: 'relative'}}>
            {
                props.location.pathname !== '/bookmarks' && (
                    <LeftPanel>
                        <AsideNav user={props.user} />
                    </LeftPanel>
                )
            }

            <Main>
                <Switch>
                    <Route path="/story/:id" component={Stories} />
                    <Route path="/bookmarks" render={() => <Bookmarks user={props.user} />}/>
                    <Route path="/friends" component={Friends}/>
                    <Route path="/pages" component={Pages}/>
                    <Route path="/watch" component={Watch}/>
                    <Route path="/groups" component={Groups}/>
                    <Route path="/" render={() => <Home friends={props.user && props.user.friends}/>}/>
                </Switch>
            </Main>

            {
                props.location.pathname === '/' && (
                    <RightPanelWrap>
                        <RightPanel>
                            <AdPanel />
                            <Contacts friends={ props.user && props.user.friends} open={props.open} show={handleShowUserContext} hide={() => setUserContext(false)}/>
                        </RightPanel>
                        {
                            userContext &&  <UserContextWindow user={userData} show={() => setUserContext(true)} hide={() => setUserContext(false)} top={top}/>
                        }
                    </RightPanelWrap>
                )
            }
        </div>
    );
};

export default withRouter(Dashboard);
