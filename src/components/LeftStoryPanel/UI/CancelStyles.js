import styled from "styled-components";

export const CancelContainer = styled.button`
    position: relative;
    left: 10px;
    border: none;
    border-radius: 50%;
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #888;
    font-size: 3rem;
    font-weight: 100;
    width: 2.6rem;
    height: 2.6rem;
    transform: rotate(45deg);

    &:hover {
        cursor: pointer;
        background: #777;
    }
`