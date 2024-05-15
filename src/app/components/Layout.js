// Layout.js
import React from 'react';
import SideMenu from './SideMenu.js';
import Grid from '@mui/material/Grid';

const Layout = ({ children }) => {
    return (
        <main style={{ display: 'flex'}}>
            <SideMenu />
            <Grid container spacing={1} style={{ border: '2px solid black', margin: '5px', }}>
                {children}
            </Grid>
        </main>
    );
};

export default Layout;
