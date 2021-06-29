import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import AdPanel from '../../components/adPanel/AdPanel';
import AsideNav from '../../components/asideNav/AsideNav';
import Contacts from '../../components/contacts/Contacts';
import Home from '../home/Home';
import Stories from '../Stories/Stories';
import UserContextWindow from '../../components/userContextWindow/UserContextWindow';
import { Main, LeftPanel, RightPanel } from './DashboardStyles';
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
        <div style={{ display: 'flex', height: 'calc(90.5vh)', overflowY: 'hidden', background: '#f0f2f5', position: 'relative'}}>
            <LeftPanel>
                <AsideNav user={props.user} />
            </LeftPanel>

            <Main>
                <Switch>
                    <Route path="/story/:id" component={Stories} />
                    <Route path="/" render={() => <Home friends={props.user && props.user.friends}/>}/>
                </Switch>
            </Main>

            <div style={{ position: 'relative', flex: 1.4 }}>
                <RightPanel>
                    <AdPanel />
                    <Contacts friends={ props.user && props.user.friends} open={props.open} show={handleShowUserContext} hide={() => setUserContext(false)}/>
                </RightPanel>
                {
                    userContext &&  <UserContextWindow user={userData} show={() => setUserContext(true)} hide={() => setUserContext(false)} top={top}/>
                }
            </div>
        </div>
    );
};

export default Dashboard;
