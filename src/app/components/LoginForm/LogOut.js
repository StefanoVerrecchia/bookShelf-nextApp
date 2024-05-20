import React from 'react'
import { useState } from 'react';
import { useStore } from '../../store/store.js'
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
const LogOut = () => {
    const [open, setOpen] = useState(false);
    const handleLogOut = () => {
        window.localStorage.removeItem('loggedUser');
        setOpen(false);
        window.location.reload();
        }
    return (
        <div>

            <IconButton style={{background:'red', color:'white'}}>
                <LogoutIcon onClick={() => setOpen(true)} />
            </IconButton>
            {
                open &&

                <Dialog

                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">

                    <DialogContentText id="alert-dialog-description" style={{ width: '280px', height: '70px', alignContent: 'center', textAlign: 'center' }}>
                        Vuoi davvero uscire?
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={() => handleLogOut()}>Conferma</Button>
                    </DialogActions>



                </Dialog>

            }
        </div>
    )
}

export default LogOut
