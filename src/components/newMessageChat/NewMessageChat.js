import UserCircle from "../userCircle/UserCircle"
import Photo from '../../img/teta.jpg'
import { Link } from "react-router-dom"
import { Container, MyMessage, ContactMessage, Close, Mini } from './NewMessageChatStyles'

const NewMessageChat = props => {
    return (
        <Container>
            <div style={{ display: 'flex', padding: '.5rem', justifyContent: 'space-between', position: 'relative'}}>
                <div style={{display: 'flex'}}>
                <Link to={props.friend && `/profile/${props.friend.slug}`}>
                    <UserCircle online w="35px" photo={props.friend && props.friend.photo} />
                </Link>
                    <div style={{ marginLeft: '.5rem'}}>
                        <Link to={props.friend && `/profile/${props.friend.slug}`} style={{ textDecoration: 'none', color: 'black'}}>
                            <h4 style={{margin: 0}}>{ props.friend && props.friend.fName + ' ' + props.friend.lName }</h4>
                        </Link>
                        <p style={{ margin: 0, fontSize: '.7rem'}}>Active now</p>
                    </div>
                </div>
                    <Mini onClick={props.minimize} width="26px" height="26px" viewBox="-4 -4 24 24"><line x1="2" x2="14" y1="8" y2="8" stroke-linecap="round" stroke-width="2" stroke="#bec2c9"></line></Mini>
                    <Close onClick={props.close} width="26px" height="26px" viewBox="-4 -4 24 24"><line x1="2" x2="14" y1="2" y2="14" stroke-linecap="round" stroke-width="2" stroke="#bec2c9"></line><line x1="2" x2="14" y1="14" y2="2" stroke-linecap="round" stroke-width="2" stroke="#bec2c9"></line></Close>
            </div>
            <div style={{height: '1px', background: 'lightgray'}} />
            <div style={{ display: 'flex', flexDirection: 'column'}}>

                <div style={{ padding: '0 .5rem', height: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                    <MyMessage>
                        My message for { props.friend && props.friend.fName + ' ' + props.friend.lName }
                    </MyMessage>
                    <div style={{ display: 'flex', marginTop: '.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', marginRight: '.2rem' }}>
                            <UserCircle w="25px" photo={Photo} />
                        </div>
                        <ContactMessage>
                            Message from { props.friend && props.friend.fName + ' ' + props.friend.lName } to me
                        </ContactMessage>
                    </div>
                </div>
                <div style={{ padding: '.5rem 1.2rem', display: 'flex', justifyContent: 'flex-end'}} >
                    <input style={{ fontSize: '.9rem',background: '#ddd', padding: '.8rem', borderRadius: '2rem', border: 'none', outline: 'none'}} placeholder="Aa" />
                </div>
            </div>
        </Container>
    )
}


export default NewMessageChat