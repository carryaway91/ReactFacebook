import Nav from './components/nav/Nav'
import styled from 'styled-components';
import AsideNav from './components/asideNav/AsideNav';
import { Route, Switch } from 'react-router';
import Home from './containers/home/Home';
import AdPanel from './components/adPanel/AdPanel';
import Contacts from './components/contacts/Contacts';
import { LayoutContext } from './context/LayoutContext'
import { ChatContext } from './context/ChatContext'
import { useState, useEffect } from 'react'
import NewMessageIcon from './components/newMessageIcon/NewMessageIcon';
import NewMessageChat from './components/newMessageChat/NewMessageChat';
import Stories from './containers/Stories/Stories';
import Dashboard from './containers/Dashboard/Dashboard';
import Profile from './containers/Profile/Profile';


  const App = () => {

    useEffect(() => {
      document.addEventListener('click', (e) => {
        let window = document.getElementById('context')
        if(window) {
          document.addEventListener('click', () => {
            window.style.display = 'none'
          })
        } 

        })
    }, [document.getElementById('context')])

  const [showChat, setShowChat] = useState(false)
  const [showLayout, setShowLayout] = useState(false)

  // overlay pri novom poste
  const handleShowOverlay = () => {
    setShowLayout(true)
}

const handleHideOverlay = () => {
    setShowLayout(false)
}

  const handleShowChat = () => {
    let window = document.getElementById('context')
    setShowChat(true)
    window.style.display = "none"
  }

  const handleOpenChat = () => {
    setShowChat(true)
    let window = document.getElementById('context')
    window.style.display = 'none'
  }

  return (
    <Content>
        <ChatContext.Provider value={{
            showChat: handleOpenChat,
        }}>
            <Nav />
        </ChatContext.Provider>

        <LayoutContext.Provider value={{
          showOverlay: handleShowOverlay,
          hideOverlay: handleHideOverlay,
          layoutStatus: showLayout
        }}>
            <Switch>
                <Route path="/profile" exact render={() => <Profile />} />
                <Route path="/*" render={() => <Dashboard open={() => setShowChat(true)}/>} />
            </Switch>
        </LayoutContext.Provider> 
        {
            showLayout && <Layout onClick={() => setShowLayout(false)} />
        }
        { showChat && <NewMessageChat close={() => setShowChat(false)} /> }


    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  `


  const Layout = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
background: white;
opacity: .7;
z-index: 90
`
export default App;
