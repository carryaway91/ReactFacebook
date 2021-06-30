import styled from "styled-components";
import { devices } from "../../media";

export const Container = styled.div`
    width: 150px;
    position: relative;
    display: flex;
    padding: .5rem;
    cursor: pointer;
    border-radius: .3rem;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background: #dedede
    }
`

export const Span = styled.span`
    ${devices.xs} {
        display: none
    }
`