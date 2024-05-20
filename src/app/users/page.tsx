'use client'
import React, { useEffect } from 'react'
import Dasboard from '../components/Dasboard.js'
import useUsersApi from '../utils/hooks/useUsersApi';
import { useQuery, useIsFetching } from '@tanstack/react-query'
import SearchBar from '../components/SearchBar.js'
import {useStore} from '../store/store.js'
/* import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
 */
import getResource from '../utils/getResource.js'

const resource = getResource('users');

export default function Users() {
  
  const { getLists } = useUsersApi();
  const { data, isError, isLoading, isSuccess } = useQuery<any>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await getLists();
      return response;
    },
    
  })
  
  const filteredData = useStore((state) => state.filteredData);
  const setFilteredData = useStore((state) => state.setFilteredData);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data, setFilteredData]);

  if (isLoading) {
    return (<div>isLoading</div>);
  }
  if(isError){
    return (<div>Errore durante il caricamento dei dati</div>);
  }
  return (

    <>
      <SearchBar data = {data}/>
      <Dasboard data={filteredData}  resource={resource}/>
    </>
  );
}

