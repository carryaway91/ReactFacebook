import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Link = props => {
    return (
        <LinkItem>
            <NavLink to={props.to || '#'} style={{ textDecoration: 'none', color: 'black', fontWeight: 500 ,padding: '.7rem .5rem', display: 'flex', alignItems: 'center'}}>
                { props.children }
            </NavLink> 
        </LinkItem>
    )
}

const LinkItem = styled.li`
    width: 100%;
    list-style-type: none;
    border-radius: .3rem;
    
    &:hover {
        background: #ddd;
    }
`
export default Link
