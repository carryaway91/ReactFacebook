import styled from "styled-components"
import { useState, useEffect } from 'react'


const Button = props => {
    const [active, setActive] = useState(false)

    useEffect(() => {
    },[document.getElementById('context')])

    const handleLoseFocus = e => {
        //ikonka
        setActive(false)
        // skryt okno
        //props.hideWindow(true)
    }

    const handleTriggerFocus = e => {
        e.stopPropagation()
        setActive(!active)
        
        if(!active) {
            props.hideWindow(false)
        } else {
            props.hideWindow(true)
        }
    }


    return (
        <Icon onClick={e => handleTriggerFocus(e)} style={props.active  ? { background: '#b8dbe8' } : null}>
            <svg viewBox={props.view} height="20" width="20" fill={props.active ? 'blue' : 'black'}>
                { props.children }
            </svg>
        </Icon>
    )
}

const Icon = styled.button`
    position: relative;
    display: flex;
    padding: .5rem;
    background: #eee;
    border-radius: 50%;
    border: none;
    
    &:hover {
        background: #ddd;
        cursor: pointer
        
    }
`




export default Button

