import styled from "styled-components"
import { devices } from "../../media"

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    right: 7rem;
    width: 328px;
    height: 452px;
    background: white;
    border-radius: .3rem;
    box-shadow: 0 1px 4px 0px lightgray;
    z-index: 101;

    ${devices.xs} {
        max-width: 280px;
        right: 0;
    }
`

export const MyMessage = styled.div`
    border-radius: .3rem;
    padding: .5rem;
    background: lightgray;
    width: 60%;
    word-break: break-word;
    align-self: flex-end;

`
    
export const ContactMessage = styled.div`
    border-radius: .3rem;
    padding: .5rem;
    background: #1877f2;
    width: 60%;
    word-break: break-word;
    align-self: flex-start;
    color: white

`

export const SVG = styled.svg`
    border-radius: 50%;
    fill: blue;
    position: relative;
    top: 4px;

    &:hover {
        background: #ddd;
        cursor: pointer
    }
`