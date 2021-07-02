import Nav from './components/nav/Nav'
import { Route, Switch } from 'react-router';
import { LayoutContext } from './context/LayoutContext'
import { ChatContext } from './context/ChatContext'
import { StoryContext } from './context/StoryContext';
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
    
    
    const [usersWithStories, setUsersWithStories] = useState()
    const [seen, setSeen] = useState()



    useEffect(() => {
      setUser(data.user)
      localStorage.setItem('seen', JSON.stringify([]))
      let stories = []
      stories = data.user.friends.filter(f => f.story)
      setUsersWithStories(stories)
      setSeen(JSON.parse(localStorage.getItem('seen')))

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


 // CHAT
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

  // STORIES 
  const handleStoriesSeen = id => {
    let seenItems = JSON.parse(localStorage.getItem('seen'))
    let isSeen = seenItems.includes(id)
    
    if(!isSeen) {
        seenItems = [
            ...seenItems,
            id
        ]
        localStorage.setItem('seen', JSON.stringify(seenItems))
    }
}

  return (
    <Content>
      <div style={{ width: '100%', height: '54px'}} />
      <LayoutContext.Provider value={{
        showOverlay: handleShowOverlay,
        hideOverlay: handleHideOverlay,
        layoutStatus: showLayout
      }}>
        <StoryContext.Provider value={{
            handleStoriesSeen: (id) => handleStoriesSeen(id),
            usersWithStories: usersWithStories
        }} >
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
        {
          showLayout && <Layout onClick={() => setShowLayout(false)} />
        }
        { showChat && <NewMessageChat friend={friend} close={handleCloseChat} minimize={handleMinimizeChat}/> }
        <NewMessageIcon main/>
        {
          mini && <NewMessageIcon friend={friend} close={() => setMini(false)} open={handleUnminimizeChat}/>
        }
        </StoryContext.Provider>
        </LayoutContext.Provider> 

    </Content>
  );
}


export default App;
