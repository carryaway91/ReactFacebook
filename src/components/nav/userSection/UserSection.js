import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Photo from '../../../img/ja.jpg'
import Button from './Button/Button'
import ContextWindow from './ContextWindow/ContextWindow'
import Messages from './Messages/Messages'
import Notifications from './Notifications/Notifications'

const UserSection = props => {
    const [activeIcon, setActiveIcon] = useState('')
    const [hideWindow, setHideWindow] = useState(true)
    
    useEffect(() => {
        document.addEventListener('click', () => {
            setActiveIcon('')
            setHideWindow(true)
        })
    },[])
    const handleActivateButton = type => {
        setActiveIcon(type)
        setHideWindow(false)
    }

    // status je hodna ikonky ci je aktivna alebo nie
    const handleTriggerWindow = (status, type) => {
        if(!status) {
            setHideWindow(false)
            setActiveIcon(type)
        } else {
            setActiveIcon('')
            setHideWindow(true)
        }
    }

    return (
        <Nav>
            <UserIcon>
                <NavLink to="/profile" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '.2rem .7rem .2rem .2rem', borderRadius: '2rem' }}
                activeStyle={{ background: 'lightblue'}}
                >
                    <img src={Photo} width="35px" style={{ borderRadius: '50%'}} />
                    <strong style={{ marginLeft: '.5rem', color: '#000' }}>Peter</strong>
                </NavLink>
            </UserIcon>
            <NavItem>
                <Button to="/chat">+</Button>
            </NavItem>
            <NavItem>
                <Button hideWindow={(status) => handleTriggerWindow(status, 'messages')} active={activeIcon == 'messages'}  >
                    <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
                </Button>
            </NavItem>
            <NavItem>
                <Button hideWindow={(status) => handleTriggerWindow(status, 'notifications')} active={activeIcon == 'notifications'} >
                    <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
                </Button>
            </NavItem>
            {
                !hideWindow && <ContextWindow
                    data={activeIcon == 'messages' ? <Messages/>
                    :
                    activeIcon == 'notifications' ? <Notifications /> : null
                }/>
            }
        </Nav>
    )
}

const Nav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 0;
    position: relative
`


const NavItem = styled.li`
    list-style-type: none;
    background: #eee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin: 0 .3rem

`

const UserIcon = styled.li`
    box-sizing: border-box;
    list-style-type: none;
    margin: 0 1rem;
    border-radius: 2rem;

    &:hover {
        background: #eee
    }
`
export default UserSection