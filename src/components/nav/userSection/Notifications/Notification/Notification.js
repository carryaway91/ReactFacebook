import React from 'react';
import UserCircle from '../../../../userCircle/UserCircle';
import InfoContainer from '../../UI/InfoContainer';
import Photo from '../../../../../img/teta.jpg'

const Notification = () => {
    return (
        <InfoContainer>
            <UserCircle w="60px" photo={Photo}/>
            <div style={{ marginLeft: '.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <p style={{margin: 0}}><strong style={{ color: '#333', fontWeight: 600}}>Contact</strong> has done something incredible today!</p>
                <p style={{ margin: 0, color: '#1877f2', fontSize: '.8rem'}}><strong>3 hours ago</strong></p>
            </div>
        </InfoContainer>            
    );
};


export default Notification;
