import { Container, Span } from "./ButtonStyles"
const Button = props => {
    return (
        <Container style={{ color: props.color }} onClick={props.clicked} onMouseEnter={props.over} onMouseLeave={props.hide}>
            <Span>{ props.children } &nbsp;</Span> { props.title }
        </Container>
    )
}

export default Button