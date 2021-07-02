import styled from "styled-components"
import { devices } from '../../../media'

export const Container = styled.div`
    max-width: 112px;
    height: 200px;
    border-radius: .5rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &:hover {
        filter: grayscale(40%);
    }

    ${devices.desktop} {
        max-width: 130px;
        height: 220px;
    }

    ${devices.xs} {
        width: 24%;
        &:last-child {
            display: none
        };
    }

    @media(max-width: 400px) {
        height: 150px
    }
    `
    
    export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: .5rem;
    transition: all .2s ease-in-out;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.1)
    }
`

export const Create = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 50px;
background: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: .8rem;

&:hover {
    filter: grayscale(20%);
}

p {
    @media(max-width: 300px) {
        display: none
    }
}
`

export const Plus = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #0f92f3;
    position: absolute;
    bottom: 1.9rem;
    left: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    font-size: 3em;
    color: white;
    font-weight: 300;
    border: 4px solid white;

    @media(max-width: 400px) {
        left: calc(65% - 30px)
    }
`

export const Layout = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    border-radius: .5rem;
    background: black;
    opacity: 0.3;
    z-index: 11111;
    cursor: pointer
`