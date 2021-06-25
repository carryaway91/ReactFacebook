import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import AdPanel from '../../components/adPanel/AdPanel';
import AsideNav from '../../components/asideNav/AsideNav';
import Contacts from '../../components/contacts/Contacts';
import Home from '../home/Home';
import Stories from '../Stories/Stories';
import { ChatContext } from '../../context/ChatContext'
import NewMessageChat from '../../components/newMessageChat/NewMessageChat';

const Dashboard = props => {

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

            <RightPanel>
                <AdPanel />
                <Contacts open={props.open} />
            </RightPanel>

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
    flex: 1.4;
    height: 100vh;
    overflow: hidden;
    scroll: hidden;
    overflow-x: hidden;
    height: 100vh;

    &:hover {
        overflow-y: scroll;
        scroll: auto
        }
    }

`

export default Dashboard;
