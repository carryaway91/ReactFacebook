import React from 'react';
import { Container, Title } from './ControlStyles';

const Control = props => {
    return (
        <Container onClick={props.clicked} onMouseEnter={props.over}>
            { props.children }
            <Title>{props.title}</Title>
        </Container>
    );
};

export default Control;
