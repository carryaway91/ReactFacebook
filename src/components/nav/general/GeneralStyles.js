import styled from "styled-components"
import { devices } from '../../../media'

export const Nav = styled.ul`
display: flex;
justify-content: space-between;
width: 600px;
margin: 0;

${devices.desktop} {
    width: 680px
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
