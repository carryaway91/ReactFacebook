import styled from 'styled-components'
import General from './general/General'
import UserSection from './userSection/UserSection'
import HomeNav from './homeNav/HomeNav'

const Nav = props => {
    return (
        <Navigation>
            <div style={{ display: 'flex', flex: 1 }}>
                <HomeNav />
            </div>

            <General />
            <UserSection user={props.user} />
        </Navigation>
    )
}

const Navigation = styled.nav`
    display: flex;
    background: #fff;
    z-index: 98;
    position: fixed;
    width: 100%;
    flex: 1;
    justify-content: space-between;
    border-bottom: 1px solid #e2e1e1;
    box-shadow: 0 1px 4px 1px #efefef
`

export default Nav