import styled from "styled-components"

export const Header = styled.div`
    width: 940px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(max-width: 940px) {
        width: 100%
    }
`

export const Content = styled.div`
    display: flex;
    width: 900px;
    margin: 0 auto;

    @media(max-width: 950px) {
        flex-direction: column;
        width: 90%
    }
`
export const Cover = styled.div`
    position: relative;
    width: 100%;
    height: 347px;
    border-radius: 0 0 .5rem .5rem;
    background: linear-gradient(180deg, #fff 0%, #999 100%);
`

export const ProfileCircle = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 3px solid white;
    position: absolute;
    bottom: -20px;
    left: calc(50% - 91px)
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`

export const FriendFrame = styled.img`
    width: 101px;
    height: 102px;
    object-fit: cover;
    border-radius: .5rem;

    @media(max-width: 950px) {
        width: 200px;
        height: 200px;
    }
    @media(max-width: 730px) {
        width: 150px;
        height: 150px;
    }
    @media(max-width: 570px) {
        width: 100px;
        height: 100px;
    }
    
    @media(max-width: 395px) {
        width: 60px;
        height: 60px
    }
`

export const FrinedWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    @media(max-width: 450px) {
        width: 30%
    }
`