import styled from "styled-components"

const Button = props => {
    return (
        <Container>
            { props.children } &nbsp; { props.title }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    padding: .5rem 2.4rem;
    cursor: pointer;
    border-radius: .3rem;

    &:hover {
        background: #dedede
    }
`
export default Button