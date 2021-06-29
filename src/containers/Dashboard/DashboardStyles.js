import styled from "styled-components"
import { devices } from "../../media"

export const Main = styled.main`
    flex: 4;
    overflow: scroll;
    height: 100%;

    ::-webkit-scrollbar {
        display: none;
    }

    
    `
    
    export const LeftPanel = styled.div`
    flex: 1.5;
    ${devices.tablet} {
        display: none
    }
`
export const RightPanel = styled.div`
    padding: 0 .45rem;
    height: 100vh;
    overflow: hidden;
    scroll: hidden;
    
    &:hover {
        overflow-y: scroll;
        scroll: auto
    }
    
`