import React from 'react';
import styled from 'styled-components';


const InfoContainer = props => {
    return (
        <Container>
            { props.children }
        </Container>
    );
};


const Container = styled.div`
    padding: .5rem;
    border-radius: .3rem;
    display: flex;

    &:hover {
        cursor: pointer;
        background: #ddd
    }
`

export default InfoContainer;
