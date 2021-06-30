import styled from "styled-components"
import { devices } from "../../media"

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100000000000;
    display: flex;

`

export const LeftPanel = styled.div`
    background: white;
    width: 360px;
    overflow: hidden;

    ${devices.mobile} {
        display: none
    }
`

export const RightPanel = styled.div`
    flex: 3;
    background: black
`


export const Create = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: blue;
    background: #eee;
    width: 60px;
    height: 60px;
    font-size: 3rem
`
