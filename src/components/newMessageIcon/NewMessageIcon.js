import { useState } from 'react'
import Message from '../../img/message.png'
import { Icon, Img, Close } from './NewMessageIconStyles'

const NewMessageIcon = props => {
    const [show, setShow] = useState(false)
    
    const closeChat = e => {
        e.stopPropagation()
        props.close()
    }
    return (
        <Icon {...props} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onClick={props.open}>
            {
                props.friend && (
                    <div style={{ position: 'relative'}}>
                        {
                            show && (
                                <Close onClick={e => closeChat(e)}>
                                    <span>+</span>
                                </Close>
                            )
                        }
                    </div>
                )   
            }
            <Img main={props.main} src={props.friend ? props.friend.photo : Message} width="20" height="20"/>
        </Icon>
    )
}


export default NewMessageIcon