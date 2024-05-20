// Layout.js
import React from 'react';
import SideMenu from './SideMenu.js';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex'}}>
            <SideMenu />
            <div  style={{ width:'100%', margin: '5px', }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
