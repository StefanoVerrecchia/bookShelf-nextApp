import './loginForm.css'
import { handleLogin } from '../../utils/api-login'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useMutation } from '@tanstack/react-query';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [openToast, setOpenToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const mutation = useMutation({
        mutationFn: (credentials) => {
            return handleLogin(credentials);
        },
        onError: (error, variables, context) => {
            console.log('error', error)
            setOpenToast(true);
            setToastMessage(error);

        },
        onSuccess: (data, variables, context) => {
            console.log('success', data)
            if (data.error) {
                console.log('ERRORE', data.error);
                setOpenToast(true);
                setToastMessage(data.error);
                return;

            }
            const user = data;
            window.localStorage.setItem('loggedUser', JSON.stringify(user));
            window.location.reload();
        },

    })
    const doLogin = async (e) => {
        e.preventDefault()
        mutation.mutate({ username: username, password: password });
    }

    return (


        <div className="loginForm">
            {
                mutation.isPending ? (<CircularProgress disableShrink />) :
                    (
                        <>
                            <span>Benvenuto!</span><span>Inserisci le credenziali per accedere</span><form onSubmit={doLogin}>

                                <div>
                                    <TextField variant="standard" placeholder="Username" type="text" name="username" value={username} onChange={({ target }) => setUsername(target.value)} />
                                    <TextField variant="standard" placeholder="Password" type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} />

                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button variant="contained" style={{ padding: '5px', margin: '10px', background: 'green', width: '100px', height: 'fit-content' }} type="submit">Accedi</Button>
                                </div>

                            </form>
                            <Snackbar 
                                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                                open={openToast}
                                onClose={() => setOpenToast(false)}
                                autoHideDuration={5000}
                                message={toastMessage} />
                        </>
                    )

            }
        </div>



    )
}
