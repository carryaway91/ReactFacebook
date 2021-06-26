import styled from "styled-components"

const Button = props => {
    return (
        <Container style={{ color: props.color }} onClick={props.clicked} onMouseEnter={props.over} onMouseLeave={props.hide}>
            { props.children } &nbsp; { props.title }
        </Container>
    )
}

const Container = styled.div`
    width: 150px;
    position: relative;
    display: flex;
    padding: .5rem;
    cursor: pointer;
    border-radius: .3rem;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background: #dedede
    }
`
export default Button