import styled from "styled-components";
import { devices } from "../../media";

export const Menu = styled.ul`
    flex: 1;
    padding: 0 0 1rem .5rem;
    margin: .3rem 0 0 .3rem;
    overflow: hidden;
    scroll: hidden;
    overflow-x: hidden;
    height: 88vh;

    &:hover {
        overflow-y: scroll;
        scroll: auto
    }

`

export const MoreBtn = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
    font-weight: bold
`