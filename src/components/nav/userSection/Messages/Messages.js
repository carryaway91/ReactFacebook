import styled from "styled-components"
import { useState } from 'react'
import Message from "./Message/Message"

const Messages = props => {
    const [showSearch, setShowSearch] = useState(true)

    return (
        <div>
            <div style={{ padding: '1rem 1rem 0 1rem'}}>
                <h2 style={{ margin: '0 0 1rem 0'}}>Messenger</h2>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <div style={{ position: 'relative', width: '100%'}}>
                    <Arrow style={{ position: 'absolute', padding: '.4rem', borderRadius: '50%'}} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/></Arrow>
                        <Input onFocus={() => setShowSearch(false)} onBlur={() => setShowSearch(true)} placeholder="Search Messenger" />
                        { showSearch && <svg enableBackground="new 0 0 50 50" height="20px" viewBox="0 0 50 50" width="20px" style={{position: 'absolute', zIndex: 2, top: '7px', left: '4px' }}><rect fill="none" height="50" width="50"></rect><circle cx="21" cy="20" fill="none" r="16" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10"></circle><line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="32.229" x2="45.5" y1="32.229" y2="45.5"></line></svg> }
                    </div>
                </div>
            </div>
            <div style={{ padding: '.5rem'}}>
                {
                   props.friends && props.friends.map(f => <Message friend={f} />)
                }

            </div>
        </div>
    )
}

const Input = styled.input`
    padding: .5rem .5rem .5rem 2rem;
    border-radius: 1rem;
    background: #eee;
    border: none;
    outline: none;
    font-size: 1rem;
    transition: all .05s ease-in-out;
    width: 90%;
    left: -5px;
    position: relative;


    &:focus {
        padding: .5rem;
        width: 85.7%;
        left: 10%
    }
`

const Arrow = styled.svg`
    left: -8px;
    top: -1px;

    &:hover {
        cursor: pointer;
        background: #ddd;
    }
`
export default Messages