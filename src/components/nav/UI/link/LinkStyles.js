import styled from "styled-components";
import { devices } from "../../../../media";

export const LinkItem = styled.li`
width: 112px;
list-style-type: none;
display: flex;
align-items: center;
border-radius: 1rem;

a {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: .7rem 2.6rem;
    text-decoration: none;
    border-bottom: 3px solid white
}
&:hover {
    background: #efefef
}

${devices.desktop} {
    width: 130px
}

${devices.tablet} {
    max-width: 5%
}
`