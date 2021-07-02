import styled from "styled-components";
import { devices } from "../../media";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    ${devices.tablet} {
        justify-content: center;
    }
`

export const ContactWrap = styled.div`
    max-width: 18%;
    border-radius: 1rem;
    margin-right: 1rem;
    box-shadow: 0 0 3px 0 lightgray;
    margin-bottom: 2rem;
    cursor: pointer;

    div {
        background: white;
        border-top: 1px solid lightgray;
        position: relative;
        top: -4px;
        border-radius: 0 0 1rem 1rem;
        padding: .7rem;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        align-items: start;

        span {
            color: gray;
            font-weight: 400
        }
    }

    @media(max-width: 530px) {
        max-width: 30%
    }


    @media(max-width: 370px) {
        font-size: .7rem
    }

`

export const Img = styled.img`
    width: 100%;
    max-height: 250px;
    border-radius: 1rem 1rem 0 0;
    object-fit: cover;
   
`

export const Add = styled.button`
    border-radius: .5rem;
    width: 100%;
    padding: .7rem 0;
    color: blue;
    border: none;
    font-weight: bold;
    background: #d4edf5;
    margin-top: 1rem;
    transition: all .2s ease-ini-out;

    &:hover {
        cursor: pointer;
        background: lightblue
    };

    @media(max-width: 370px) {
        font-size: .5rem
    }
`