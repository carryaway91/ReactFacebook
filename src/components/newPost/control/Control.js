import React from 'react';
import styled from 'styled-components';


const Control = props => {
    return (
        <Container>
            { props.children }
            <Title>{props.title}</Title>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    border-radius: .5rem;
    cursor: pointer;

    &:hover {
        background: #ddd
    }
`

const Title = styled.p`
    font-weight: 600;
    font-size: .9rem;
    color: #666;
    margin-left: .5rem
`

export default Control;
