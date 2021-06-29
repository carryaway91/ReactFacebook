import { NavLink } from 'react-router-dom'
import { LinkItem } from './LinkStyles'


const Link = (props) => {
    return (
        <LinkItem onMouseEnter={props.show} onMouseLeave={props.hide}>
            <NavLink exact to={props.to}  activeStyle={{ borderBottom: '3px solid #1877f2', color: 'blue', fill: '#1877f2', stroke: 'none'}}>
                    {props.children}
            </NavLink>
        </LinkItem>
    )
}

export default Link