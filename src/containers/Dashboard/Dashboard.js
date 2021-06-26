import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import AdPanel from '../../components/adPanel/AdPanel';
import AsideNav from '../../components/asideNav/AsideNav';
import Contacts from '../../components/contacts/Contacts';
import Home from '../home/Home';
import Stories from '../Stories/Stories';
import UserContextWindow from '../../components/userContextWindow/UserContextWindow';

const Dashboard = props => {
    const [userContext, setUserContext] = useState(false)
    const [top, setTop] = useState(0)


    const handleShowUserContext = top => {
        if(top < 75) {
            setTop(10)
        } else {
            setTop(top - 90)
        }
        setUserContext(true)
    }


    return (
        <div style={{ display: 'flex', height: 'calc(90.5vh)', overflowY: 'hidden', background: '#f0f2f5', position: 'relative'}}>
            <LeftPanel>
                <AsideNav />
            </LeftPanel>

            <Main>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/story" component={Stories} />
                </Switch>
            </Main>

            <div style={{ position: 'relative', flex: 1.4 }}>
                <RightPanel>
                    <AdPanel />
                    <Contacts open={props.open} show={handleShowUserContext} hide={() => setUserContext(false)}/>
                </RightPanel>
                {
                    userContext &&  <UserContextWindow show={() => setUserContext(true)} hide={() => setUserContext(false)} top={top}/>
                }
            </div>
        </div>
    );
};

const Main = styled.main`
    flex: 4;
    overflow: scroll;
    height: 100%;

    ::-webkit-scrollbar {
        display: none;
    }

    
`

const LeftPanel = styled.div`
    flex: 1.5
`
const RightPanel = styled.div`
    padding: 0 .45rem;
    height: 100vh;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        display: none;
    }
    &:hover {
        overflow-x: visible;
       
        }
    }

`

export default Dashboard;
