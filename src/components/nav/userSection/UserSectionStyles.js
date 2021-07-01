import styled from "styled-components"
import { devices } from "../../../media" 

export const Nav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 0;
    position: relative;
    left: .8rem;
    padding-right: 1rem;

  
    ${devices.xs} {
        padding: 0
    }
`


export const NavItem = styled.li`
    position: relative;
    list-style-type: none;
    background: #eee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin: 0 .3rem

`

export const UserIcon = styled.li`
    box-sizing: border-box;
    list-style-type: none;
    margin: 0 1rem;
    border-radius: 2rem;

    &:hover {
        background: #eee
    }

${devices.tablet} {
    display: none
}
`

export const Title = styled.div`
    position: absolute;
    bottom: -2.3rem;
    left: -1rem;
    padding: .2rem;
    font-size: .9em;
    background: rgba(0,0,0,.7);
    color: white;
    display: flex;
    justify-content: center;
    border-radius: .2rem;
`

export const Plus = styled.span`
    &:before {
        content: '+';
        position: absolute;
        top: 0;
        left: 0
    }
`

export const CreateWrap = styled.div`
    ${devices.xs} {
        display: none
    }
`