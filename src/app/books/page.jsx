import React from 'react';
import { getLists } from '../utils/api-book';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import SideMenu from '../components/SideMenu';
import Link from "next/link";



export default async function Books() {
  const books = await getLists();
  return (

      <>
        {
        books.map((el) => (
          <Grid item xs={4} key={el._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '2px solid black', margin: '5px' }}>
            <p>{el.title}</p>
            <div>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>

              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
            </div>
          </Grid>
        ))
        }
      </>
  );
}

