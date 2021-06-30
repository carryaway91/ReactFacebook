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
import { data } from './api/api'
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import { Content, Layout, NavWrap } from './AppStyles';
 
const App = () => {
    const [user, setUser] = useState()
    const [friend, setFriend] = useState()
    const [showChat, setShowChat] = useState(false)
    const [showLayout, setShowLayout] = useState(false)

    useEffect(() => {
      setUser(data.user)
    }, [])

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

  const handleOpenChat = friend => {
    setShowChat(true)
    setFriend(friend)
    let window = document.getElementById('context')
    if(window) {
      window.style.display = 'none'
    }
  }

  return (
    <Content>
      <div style={{ width: '100%', height: '57px'}} />
      <LayoutContext.Provider value={{
        showOverlay: handleShowOverlay,
        hideOverlay: handleHideOverlay,
        layoutStatus: showLayout
      }}>
        <ChatContext.Provider value={{
            showChat: handleOpenChat,
        }}>
            <Nav user={user} />
            <NavWrap>
              <MobileNavigation />
            </NavWrap>
        </ChatContext.Provider>

            <Switch>
                <Route path="/profile/:slug" exact render={() => <Profile />} />
                <Route path="/*" render={() => <Dashboard user={user} open={handleOpenChat}/>} />
            </Switch>
        </LayoutContext.Provider> 
        {
            showLayout && <Layout onClick={() => setShowLayout(false)} />
        }
        { showChat && <NewMessageChat friend={friend} close={() => setShowChat(false)} /> }


    </Content>
  );
}


export default App;
