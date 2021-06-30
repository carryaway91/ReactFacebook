import styled from "styled-components"
import { devices } from "../../media"

export const Container = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${devices.xs} {
        max-width: 100%
    }
`

export const ProfilePhoto = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

export const Dot = styled.span`
    position: relative;
    bottom: 3px;
    margin: 0 .2rem
`
export const ImageHolder = styled.div`
    position: relative;
    top: -7px;
    width: calc(100% + 2rem);
    left: -1rem;
`

export const Image = styled.img`
    max-width: 100%
`

export const EmojiContainer = styled.div`
    margin-bottom: .2rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid lightgray

    .emoji {
        display: flex;
        align-items: center
    }
`