import styled from "styled-components";

export const TitleContainer = styled.div`
    display: flex;
`

export const Circle = styled.div`
    align-self:: baseline
`

export const Title = styled.div`
    margin-left: 1rem;

    h4 {
        margin: 0
    }

    p {
        margin: .2rem 0 0 0;
        color: gray
    }

`

export const IFrame = styled.iframe`
    width: calc(100% + 2rem);
    height: 409px;
    position: relative;
    left: -1rem;
    border: 0;
    margin-top: 1rem
`