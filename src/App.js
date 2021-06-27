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
        <ChatContext.Provider value={{
            showChat: handleOpenChat,
        }}>
            <Nav user={user} />
        </ChatContext.Provider>

        <LayoutContext.Provider value={{
          showOverlay: handleShowOverlay,
          hideOverlay: handleHideOverlay,
          layoutStatus: showLayout
        }}>
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
z-index: 99
`
export default App;
