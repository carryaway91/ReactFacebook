import styled from 'styled-components'
import Photo from '../../img/baba.jpg'


const UserStoryIcon = () => {
    return (
        <Icon>
            <Img src={Photo} />
        </Icon>
    )
}


const Icon = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 3;
    border-radius: 50%;
    border: 4px solid #0f92f3;
    top: .7rem;
    left: .7rem;
    cursor: pointer
`

const Img = styled.img`
    object-fit: cover;
    border-radius: 50%;
    width: 100%;
    height: 100%
`
export default UserStoryIcon