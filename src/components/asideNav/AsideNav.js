import { useState } from 'react'
import UserCircle from '../userCircle/UserCircle'
import Link from "./Link/Link"
import Covid from './icons/covid.png'
import Friends from './icons/friends.png'
import Group from './icons/group.png'
import Pages from './icons/pages.png'
import Market from './icons/market.png'
import Watch from './icons/watch.png'
import Down from './icons/Down'
import Shortcut from './icons/shortcut.png'
import More from './icons/more.png'
import { Menu } from './AsideNavStyles'

const AsideNav = props => {
    const [showMore, setShowMore] = useState(false)
    

    return (
        <Menu>
            <Link to={props.user && `/profile/${props.user.slug}`}>
                <UserCircle w="30px" photo={ props.user && props.user.photo} />
                <span style={{ marginLeft: '.5rem'}}>{ props.user && props.user.fName + ' ' + props.user.lName }</span>
            </Link>
            <Link>
                <img src={Covid} width="25px" />
                <span style={{ marginLeft: '.5rem'}}>Covid-19 Information Center</span>
            </Link>
            <Link>
                <img src={Friends} width="25px" />
                <span style={{ marginLeft: '.5rem'}}>Friends</span>
            </Link>
            <Link>
                <img src={Group} width="25px" />
                <span style={{ marginLeft: '.5rem'}}>Groups</span>
            </Link>
            <Link>
                <img src={Pages} width="25px" />
                <span style={{ marginLeft: '.5rem'}}>Pages</span>
            </Link>
            <Link>
                <img src={Market} width="25px" />
                <span style={{ marginLeft: '.5rem'}}>Marketplace</span>
            </Link>
            <Link>
                <img src={Watch} width="25px" />
                <span style={{ marginLeft: '.5rem'}}>Watch</span>
            </Link>
            <Link>
                <button onClick={() => setShowMore(!showMore)} style={{ display: 'flex', alignItems: 'center',
                outline: 'none', border: 'none', cursor: 'pointer', background: 'transparent', fontWeight: 'bold'}}><Down /> See more</button>
            </Link>

            {
                showMore && (
                    <div>
                        <Link>
                            <img src={More} width="25px" />
                            <span style={{ marginLeft: '.5rem'}}>More</span>
                        </Link>
                        <Link>
                            <img src={More} width="25px" />
                            <span style={{ marginLeft: '.5rem'}}>More</span>
                        </Link>
                        <Link>
                            <img src={More} width="25px" />
                            <span style={{ marginLeft: '.5rem'}}>More</span>
                        </Link>
                        <Link>
                            <img src={More} width="25px" />
                            <span style={{ marginLeft: '.5rem'}}>More</span>
                        </Link>
                        <Link>
                            <img src={More} width="25px" />
                            <span style={{ marginLeft: '.5rem'}}>More</span>
                        </Link>
                        <Link>
                            <img src={More} width="25px" />
                            <span style={{ marginLeft: '.5rem'}}>More</span>
                        </Link>
                        <Link>
                            <img src={More} width="25px" />
                            <span style={{ marginLeft: '.5rem'}}>More</span>
                        </Link>
                    </div>
                )
            }

            <hr />
            <h3>Your Shortcuts</h3>
            <Link>
                <img src={Shortcut} width="25px" />
                <span style={{ marginLeft: '.5rem'}}>Shortcut</span>
            </Link>
            <Link>
                <img src={Shortcut} width="25px" />
                <span style={{ marginLeft: '.5rem'}}>Shortcut</span>
            </Link>
            <Link>
                <img src={Shortcut} width="25px" />
                <span style={{ marginLeft: '.5rem'}}>Shortcut</span>
            </Link>
            <Link>
                <img src={Shortcut} width="25px" />
                <span style={{ marginLeft: '.5rem'}}>Shortcut</span>
            </Link>
        </Menu>
    )
}

export default AsideNav