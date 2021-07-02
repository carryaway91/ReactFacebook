import General from './general/General'
import UserSection from './userSection/UserSection'
import HomeNav from './homeNav/HomeNav'
import { Navigation, GeneralWrap } from './NavStyles'

const Nav = props => {
    return (
        <Navigation>
            <div style={{ display: 'flex', flex: 1 }}>
                <HomeNav />
            </div>
            <GeneralWrap>
                <General main/>
            </GeneralWrap>
            <UserSection user={props.user} />
        </Navigation>
    )
}


export default Nav