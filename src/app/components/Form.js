'use client'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBooksApi from '../utils/hooks/useBooksApi';
import { useState } from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #4E5F75',
    boxShadow: 24,
    p: 4,

};

const Form = () => {
    
  const { create } = useBooksApi();
    const [openForm, setOpenForm] = useState(false);
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (newBook) => {
            return create(newBook);
        },
        onError: (error, variables, context) => {

        },
        onSuccess: (data) => {
            console.log('success', data)
            queryClient.invalidateQueries({ queryKey: ['books'] })
        },
    })
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('onSubmit')
        const formData = new FormData(event.target);
        const newData = {};
        formData.forEach((value, key) => {
            newData[key] = value;
        });
        mutation.mutate(newData)
        setOpenForm(false);
    }

    return (


        <>

            <IconButton variant="contained" onClick={()=>setOpenForm(true)} ><AddCircleOutlineRoundedIcon /></IconButton>
            {openForm &&

                <Modal
                    open={openForm}
                    onClose={() => setOpenForm(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div style={style}>
                        <form onSubmit={onSubmit} style={{ display: 'flex', justifyContent: 'center', background: 'white' }}>
                            <table >
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '15px' }}>
                                            <TextField variant="standard" id="title" name="title" placeholder='Title' style={{ padding: '5px', margin: '10px' }}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '15px' }}>
                                            <TextField variant="standard" id="author" name="author" placeholder='Author' style={{ padding: '5px', margin: '10px' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '15px' }}>
                                            <TextField variant="standard" id="publicationDate" name="publicationDate" placeholder='Publication date' style={{ padding: '5px', margin: '10px' }}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '15px' }}>

                                            <Button type='submit' variant="contained" size="medium" style={{ padding: '5px', margin: '10px', background: '#4E5F75' , width:'80px'}}>Aggiungi</Button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </Modal>
            }
        </>



    )
}
export default Form;