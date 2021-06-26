import styled from "styled-components"

const ContextWindow = props => {

    const clicked = e => {
        e.stopPropagation()
    }
    return (
        <Context onClick={(e) => clicked(e)} id="context">
            { props.children }
            <div onClick={props.open} style={{ width: '100%'}}>
            { props.data}
            </div>
        </Context>
    )
}

const Context = styled.div`
    width: 360px;
    height: 550px;
    position: absolute;
    top: 60px;
    right: 10px;
    background: white;
    border-radius: .3rem;
    box-shadow: 1px 5px 15px 1px gray;
    z-index: 100000;
    overflow: scroll;
`

export default ContextWindow