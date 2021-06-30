import React, { useState } from 'react';
import Photo from '../../img/ja.jpg'
import UserCircle from '../userCircle/UserCircle';
import { Contain, PostBtn } from './NewPostPopupStyles';

const NewPostPopup = () => {
    const [inputVal, setInputVal] = useState()

    return (
        <Contain> 
            <h2 style={{ display: 'flex', justifyContent: 'center'}}>Create Post</h2>
            <div style={{ width: '100%', height: '1px', background: '#ddd'}}/>
            <div style={{ padding: '.8rem'}}>
                <div style={{ display: 'flex'}}>
                    <UserCircle w="40px" style={{ alignSelf: 'start'}} photo={Photo} />
                    <div style={{ marginLeft: '.5rem'}}>
                        <h5 style={{ margin: 0}}>Peter Babej</h5>
                        <select>
                            <option>Public</option>
                            <option>Private</option>
                            <option>Friends</option>
                            <option>Only me</option>
                        </select>
                    </div>

                </div>
                <form>
                    <textarea placeholder="What's on your mind, Peter?" 
                    style={{ marginTop: '1rem', resize:"none",  width: '100%', fontSize: '1.5rem', border: 'none', outline: 'none'}} 
                    rows="4"
                    onChange={(e) => setInputVal(e.target.value)}
                    value={inputVal}
                    ></textarea>
                    <PostBtn disabled>Post</PostBtn>
                </form>
            </div>
        </Contain>
    );
};

export default NewPostPopup;
