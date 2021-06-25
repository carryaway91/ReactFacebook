import React, { useContext } from 'react';
import Photo from '../../../../../img/teta.jpg'
import InfoContainer from '../../UI/InfoContainer'
import UserCircle from '../../../../userCircle/UserCircle'
import { ChatContext } from '../../../../../context/ChatContext'


const Message = props => {
    const { showChat } = useContext(ChatContext)
    
    return (
        <InfoContainer >
            <div style={{ display: 'flex' }} onClick={() => showChat()}>
                <UserCircle w="60px" photo={Photo}/>
                <div style={{ marginLeft: '.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h4 style={{ margin: 0}}>Contact</h4>
                    <p style={{ margin: 0}}>Say hi to Contact!</p>
                </div>
            </div>
        </InfoContainer>
    );
};




export default Message;
