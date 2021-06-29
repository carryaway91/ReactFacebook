import styled from "styled-components"
import { devices } from '../../../media'

export const SearchBar = styled.div`
    padding: 0 1rem 1rem 1rem;
    position: absolute;
    background: white; 
    top: 0; 
    left: 0; 
    width: 320px;
    max-height: 500px;
    zIndex: 0;
    border-radius: 0 0 .5rem 0;
    box-shadow: 1px 10px 15px 1px #aaa;
    z-index: 100
`

export const Search = styled.input`
    position: absolute;
    align-self: center;
    background: #efefef;
    padding: .6rem 1rem;
    border-radius: 50rem;
    border: none;
    outline: none;
    font-size: 1.02rem;
    padding-left: 2rem; 
    width: 180px;
    left: 0;
    transition: all .2s ease-in-out;
    z-index: 101;

    &:focus {
        padding-left: 1rem;
        left: -20px;
        width: 216px
    }

    ${devices.tablet} {
        width: 0;
        padding-left: 1.4rem
    }
`

export const Magnifier = styled.svg`
    background: #0f92f3;
    padding: .5rem;
    border-radius: 50%;
    position: relative;
    top: 10px;
`

export const InputMagnifier = styled.svg`
    position: absolute;
    z-index: 102;
    top: 17px;
    left: 9px;
`