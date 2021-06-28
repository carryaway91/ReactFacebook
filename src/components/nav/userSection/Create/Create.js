import React, {useContext} from 'react';
import InfoContainer from '../UI/InfoContainer';
import Message from '../../../../img/message.png'
import { LayoutContext } from '../../../../context/LayoutContext'

const Create = () => {
    const { showOverlay, layoutStatus } = useContext(LayoutContext)

    return (
        <div style={{ marginBottom: '1rem'}}>

        <div style={{ padding: '1rem 1rem 0 1rem'}}>
            <h2 style={{ margin: '0 0 1rem 0'}}>Create</h2>
        </div>
            <div style={{ padding: '0rem .5rem'}}>
                <InfoContainer>
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center'}} onClick={() => showOverlay()}>
                        <img src={Message} width="20px" style={{marginRight: '.5rem' }}/>
                        Create new post
                    </div>
                </InfoContainer>


               

            </div>
        </div>
    );
};




export default Create;
