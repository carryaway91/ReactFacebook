import styled from "styled-components"
import { devices } from '../../../media'

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    border-radius: .5rem;
    cursor: pointer;

    &:hover {
        background: #ddd
    };

    ${devices.xs} {
        &:last-child {
            display: none;
        }
    }
`

export const Title = styled.p`
    font-weight: 600;
    font-size: .9rem;
    color: #666;
    margin-left: .5rem
`