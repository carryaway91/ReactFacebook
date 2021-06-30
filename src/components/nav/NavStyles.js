import styled from "styled-components";
import { devices } from "../../media";

export const Navigation = styled.nav`
    display: flex;
    background: #fff;
    z-index: 98;
    position: fixed;
    width: 100%;
    height: 55px;
    flex: 1;
    justify-content: space-between;
    border-bottom: 1px solid #e2e1e1;
    box-shadow: 0 1px 4px 1px #efefef
`

export const GeneralWrap = styled.div`
    ${devices.mobile} {
        display: none
    }

    @media(max-width: 980px) {
        display: none
    }
`