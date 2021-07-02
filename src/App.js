import Nav from './components/nav/Nav'
import { Route, Switch } from 'react-router';
import { LayoutContext } from './context/LayoutContext'
import { ChatContext } from './context/ChatContext'
import { useState, useEffect } from 'react'
import NewMessageChat from './components/newMessageChat/NewMessageChat';
import NewMessageIcon from './components/newMessageIcon/NewMessageIcon';
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
    const [mini, setMini] = useState(false)

    useEffect(() => {
      setUser(data.user)
      localStorage.setItem('seen', JSON.stringify([]))
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
    setMini(false)
    setFriend(friend)
    let window = document.getElementById('context')
    if(window) {
      window.style.display = 'none'
    }
  }

  const handleCloseChat = () => {
    setShowChat(false)
    setMini(false)
  }

  const handleMinimizeChat = () => {
    setShowChat(false)
    setMini(true)
  }

  const handleUnminimizeChat = () => {
    setShowChat(true)
    setMini(false)
  }


  return (
    <Content>
      <div style={{ width: '100%', height: '54px'}} />
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
        { showChat && <NewMessageChat friend={friend} close={handleCloseChat} minimize={handleMinimizeChat}/> }
        <NewMessageIcon main/>
        {
          mini && <NewMessageIcon friend={friend} close={() => setMini(false)} open={handleUnminimizeChat}/>
        }

    </Content>
  );
}


export default App;
