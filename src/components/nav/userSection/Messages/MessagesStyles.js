import styled from "styled-components"

export const Input = styled.input`
    padding: .5rem .5rem .5rem 2rem;
    border-radius: 1rem;
    background: #eee;
    border: none;
    outline: none;
    font-size: 1rem;
    transition: all .05s ease-in-out;
    width: 90%;
    left: -5px;
    position: relative;


    &:focus {
        padding: .5rem;
        width: 86.3%;
        left: 10%
    }
`

export const Arrow = styled.svg`
left: -8px;
top: -1px;

&:hover {
    cursor: pointer;
    background: #ddd;
}
`