import React from 'react';
import AsideNav from '../../components/asideNav/AsideNav';

const Bookmarks = props => {
    return (
        <div>
            <AsideNav user={props.user && props.user} />
        </div>
    );
};




export default Bookmarks;
