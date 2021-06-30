import { Context } from './ContextWindowStyles'

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


export default ContextWindow