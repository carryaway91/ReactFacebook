import styled from "styled-components";
import { devices } from "../../../../media";

export const Context = styled.div`
    width: 360px;
    max-height: 85vh;
    position: absolute;
    top: 55px;
    right: 20px;
    background: white;
    border-radius: .3rem;
    box-shadow: 1px 5px 15px 1px gray;
    z-index: 100000;
    overflow: scroll;
    overflow: hidden;
    scroll: hidden;
    
    &:hover {
        overflow-y: scroll;
        scroll: auto
    }

    ${devices.xs} {
        width: 280px
    }
`