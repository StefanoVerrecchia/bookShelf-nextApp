'use client'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Detail from './Detail.js'

import CircularProgress from '@mui/material/CircularProgress';
import useUsersApi from '../utils/hooks/useUsersApi';
import useBooksApi from '../utils/hooks/useBooksApi';



const DialogModal = ({ element, resource }) => {
  const { removeUser } = useUsersApi();
  const { remove } = useBooksApi();
  const [openDialog, setOpenDialog] = useState(false);


  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return remove(id);
    },
    onError: (error, variables, context) => {
      console.log('error', error)

    },
    onSuccess: (data, variables, context) => {
      console.log('success', data)
      queryClient.invalidateQueries({ queryKey: [resource.type] })
      setOpenDialog(false);
    },

  })
  const showDialog = () => {
    console.log('show');
    setOpenDialog(true);
  }

  const deleteRecord = (id) => {
    console.log('delete record with id --> ', id);
    mutation.mutate(id);
  }



  return (

    <>
      <IconButton aria-label="delete" onClick={() => showDialog()}>
        <DeleteIcon />
      </IconButton>
      {
        openDialog &&

        <Dialog

          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {mutation.isPending ? (<CircularProgress disableShrink />) :
            (
              <>
                <DialogContentText id="alert-dialog-description" style={{ width: '280px', height: '70px', alignContent: 'center', textAlign: 'center' }}>
                  Vuoi eliminare questo articolo?
                </DialogContentText>
                <DialogActions>
                  <Button onClick={() => setOpenDialog(false)}>Chiudi</Button>
                  <Button onClick={() => deleteRecord(element._id)}>Elimina</Button>
                </DialogActions>
              </>
            )
          }

        </Dialog>
      }
      
    </>
  )
}


const Dasboard = ({ data, resource }) => {
  console.log('data --->', data);

  return (
    <div style={{ display: 'grid', 'gridTemplateColumns': '400px 400px 400px', 'gridTemplateRows': '200px' }}>
      {
        data.map(el => (
          <div key={el._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '4px solid #4E5F75', 'margin': '45px', height: '120px', borderRadius: '5%' }}>
            <p style={{ margin: '10px', 'border-bottom': '1px solid #4E5F75' }}>{el[resource.key]}</p>
            <div key={el._id} >
              <Detail element={el} resource={resource} />
              <DialogModal element={el} resource={resource} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Dasboard
