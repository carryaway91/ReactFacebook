import React from 'react';
import styled from 'styled-components';


const Ad = () => {
    return (
        <Container>
            <ImgContainer>
                <Img src="https://www.adweek.com/wp-content/uploads/2019/12/hulu-cheez-it-ad-CONTENT-2019.jpg" />
            </ImgContainer>
            <Desc>
                <h3 style={{ margin: 0}}>New crisps!</h3>
                <p style={{ margin: 0}}>crisps.com</p>
            </Desc>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    cursor: pointer;
    border-radius: .3rem;
    padding: 0.5rem;
    margin-left: -.5rem;

    &:hover {
        background: #ddd

    }
`

const ImgContainer = styled.div`
    width: 94px;
    max-height: 70px;
    border-radius: .3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: .3rem
`

const Desc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: .8rem;
    padding-left: 1rem
`


export default Ad;
