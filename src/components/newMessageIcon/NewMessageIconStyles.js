import styled from "styled-components";

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: ${props => props.main ? '1rem' : '4.5rem'};
    right: 2rem;
    border-radius: 50%;
    transition: all .2s ease-in-out;
    box-shadow: 0 0 4px 0 gray;
    
    &:hover {
        background: #ddd;
        cursor: pointer;
    }
`

export const Img = styled.img`
    object-fit: cover;
    width: ${ props => props.main ? null : '100%' };
    height: ${ props => props.main ? null : '100%' };
    border-radius: ${ props => props.main ? null : '50%' };
`

export const Close = styled.div`
    position: absolute;
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ccc;
    top: -1.9rem;
    right: -3.3rem;
    transition: all .1s ease-in-out;

    &:hover {
        background: #ddd
    }
    
    span {
        font-size: 1.4rem;
        position: relative;
        left: 8px;
        bottom: 5px;
        transform: rotate(45deg)
    }


`