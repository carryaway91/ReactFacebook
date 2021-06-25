import styled from 'styled-components'

const UserCircle = props => {
    return (
        <PhotoContainer>
            <Img src={props.photo} width={props.w} height={props.w} />
            { props.online && <OnlineCircle />}
        </PhotoContainer>
    )
}

const Img = styled.img`
    object-fit: cover;
    border-radius: 50%;
`


const PhotoContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

const OnlineCircle = styled.div`
    width: 7px;
    height: 7px;
    background: green;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 2px solid white
    `

export default UserCircle