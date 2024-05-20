// Layout.js
'use client'
import React from 'react';
import SideMenu from './SideMenu/SideMenu.js';
import Login from './LoginForm/LoginForm.js'

const Layout = ({ children }) => {

    const loggedUser = window.localStorage.getItem('loggedUser');
    console.log('loggedUser ---> ' , loggedUser);
    return (
        <>
            {loggedUser ?
                (
                    <div style={{ display: 'flex' }} >
                        <SideMenu />
                        <div style={{ width: '100%', margin: '5px', }}>
                            {children}
                        </div>
                    </div >) :
                (<Login />)



            }
        </>
    );
};

export default Layout;
