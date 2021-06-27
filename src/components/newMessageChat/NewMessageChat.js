import styled from "styled-components"
import UserCircle from "../userCircle/UserCircle"
import Photo from '../../img/teta.jpg'
const NewMessageChat = props => {
    return (
        <Container>
            <div style={{ display: 'flex', padding: '.5rem', justifyContent: 'space-between', position: 'relative'}}>
                <div style={{display: 'flex'}}>
                    <UserCircle w="35px" photo={Photo} />
                    <div style={{ marginLeft: '.5rem'}}>
                        <h4 style={{margin: 0}}>{ props.friend && props.friend.fName + ' ' + props.friend.lName }</h4>
                        <p style={{ margin: 0, fontSize: '.7rem'}}>Active now</p>
                    </div>
                </div>
                    <SVG onClick={props.close} width="26px" height="26px" viewBox="-4 -4 24 24"><line x1="2" x2="14" y1="2" y2="14" stroke-linecap="round" stroke-width="2" stroke="#bec2c9"></line><line x1="2" x2="14" y1="14" y2="2" stroke-linecap="round" stroke-width="2" stroke="#bec2c9"></line></SVG>
            </div>
            <div style={{height: '1px', background: 'lightgray'}} />
            <div style={{ display: 'flex', flexDirection: 'column'}}>

                <div style={{ overflowY: 'scroll', padding: '0 .5rem', height: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
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

const Container = styled.div`
    position: fixed;
    bottom: 0;
    right: 7rem;
    width: 328px;
    height: 452px;
    background: white;
    border-radius: .3rem;
    box-shadow: 0 1px 4px 0px lightgray;
    z-index: 101
`

const MyMessage = styled.div`
    border-radius: .3rem;
    padding: .5rem;
    background: lightgray;
    width: 60%;
    word-break: break-word;
    align-self: flex-end;

`
    
const ContactMessage = styled.div`
    border-radius: .3rem;
    padding: .5rem;
    background: #1877f2;
    width: 60%;
    word-break: break-word;
    align-self: flex-start;
    color: white

`

const SVG = styled.svg`
    border-radius: 50%;
    fill: blue;
    position: relative;
    top: 4px;

    &:hover {
        background: #ddd;
        cursor: pointer
    }
    `
export default NewMessageChat