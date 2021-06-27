import React, { useContext } from 'react';
import InfoContainer from '../../UI/InfoContainer'
import UserCircle from '../../../../userCircle/UserCircle'
import { ChatContext } from '../../../../../context/ChatContext'


const Message = props => {
    const { showChat } = useContext(ChatContext)
    
    return (
        <InfoContainer >
            <div style={{ display: 'flex', width: '100%' }} onClick={() => showChat(props.friend)}>
                <UserCircle w="60px" photo={props.friend.photo}/>
                <div style={{ marginLeft: '.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h4 style={{ margin: 0}}>{props.friend.fName + ' ' + props.friend.lName} </h4>
                    <p style={{ margin: 0}}>Say hi to {props.friend.fName + ' ' + props.friend.lName}!</p>
                </div>
            </div>
        </InfoContainer>
    );
};




export default Message;
