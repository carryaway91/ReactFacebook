import styled from 'styled-components'
import { devices } from '../../media'

export const Content = styled.div`
    width: 600px;
    margin: 0 auto 1.7rem auto;
    position: relative;
    left: -.6rem;

    ${devices.desktop} {
        width: 680px;
        left: -.85rem
    }

    ${devices.xs} {
        width: 100%;
        margin: 0;
        left: 0
    }
`
    
export const PostsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto; 
    width: 88%;
    
    ${devices.desktop} {
        width: 100%
    };

    ${devices.xs} {
        width: 100%
    }
`
