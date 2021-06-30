import styled from "styled-components";
import { devices } from "../../media";

export const PostInput = styled.input`
    width: 100%;
    padding: .8rem;
    background: #eee;
    margin-left: .7rem;
    border: none;
    border-radius: 2rem;
    outline: none;
    font-size: 1.2rem
`

export const ControlsPanel = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: .7rem;

    ${devices.xs} {
        justify-content: center
    }
`