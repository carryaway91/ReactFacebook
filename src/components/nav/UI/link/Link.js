import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Link = (props) => {

   
    return (
        <LinkItem>
            <NavLink style={{ width: '100%', padding: '.7rem 2.6rem', textDecoration: 'none', borderBottom: '3px solid white' }} to={props.to}  activeStyle={{ borderBottom: '3px solid #1877f2', color: 'blue', fill: '#1877f2', stroke: 'none'}}>
                    {props.children}
            </NavLink>
        </LinkItem>
    )
}


const LinkItem = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    
    &:hover {
        background: #efefef
    }
    
`
export default Link