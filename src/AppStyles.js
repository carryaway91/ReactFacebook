import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  `


export const Layout = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: white;
    opacity: .7;
    z-index: 99
`

export const NavWrap = styled.div`
    display: flex;
    justify-content: center;
    display: none;
    @media(max-width: 980px) {
        display: block
    }
`