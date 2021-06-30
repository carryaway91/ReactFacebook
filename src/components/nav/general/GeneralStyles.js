import styled from "styled-components"
import { devices } from '../../../media'

export const Nav = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    left: 8px;
    height: 54px;
    
    @media(max-width: 600px) {
        max-width: 600px
    }

    @media(min-width: 1230px) {
        width: 600px;
    }
  
    @media(min-width: 1600px) {
        width: 680px
    }

    ${devices.mobile} {
        padding: 0;
        max-width: 600px;
        left: 0
    }
`

export const DesktopNav = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

${devices.notebook} {
        width: 600px;
    }
   
`

export const Title = styled.div`
    position: absolute;
    bottom: -1.8rem;
    left: 2rem;
    padding: .2rem;
    font-size: .9em;
    background: rgba(0,0,0,.7);
    color: white;
    display: flex;
    justify-content: center;
    border-radius: .2rem;
`
