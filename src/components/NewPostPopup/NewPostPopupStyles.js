import styled from "styled-components"
import { devices } from "../../media"

export const Contain = styled.div`
    position: fixed;
    width: 500px;
    height: 20rem;
    background: white;
    border-radius: .5rem;
    box-shadow: 0 2px 2px 0 lightgray;
    z-index: 100;
    top: calc(50% - 10rem);
    left: calc(50% - 250px);

    ${devices.xs} {
        width: 100%;
        left: calc(50% - 50vw);
        height: auto
    }
`

export const PostBtn = styled.button`
    width: 100%;
    padding: .8rem 0;
    background: rgb(0, 132, 255);
    color: white;
    outline: none;
    border: none;
    border-radius: .3rem;

    &:hover {
        cursor: pointer;
        background: rgba(0, 132, 255, .8)
    }
`