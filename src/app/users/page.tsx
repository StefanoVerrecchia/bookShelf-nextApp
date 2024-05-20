'use client'
import React, { useEffect } from 'react'
import Dasboard from '../components/Dasboard.js'
import { useQuery, useIsFetching } from '@tanstack/react-query'
import SearchBar from '../components/SearchBar.js'
import {useStore} from '../store/store.js'
/* import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
 */
import getResource from '../utils/getResource.js'


export default function Users() {
  
  const resource : any = getResource('users');
  const setResource = useStore((state) => state.setResource);

  useEffect(()=>{
    setResource(resource);
  },[]);
  const { data, isError, isLoading, isSuccess } = useQuery<any>({
    queryKey: ['users'],
    queryFn: async () => {
      if (!resource) {
        throw new Error('Resource not found');
      }
      const response = await resource.action.GET_LIST();
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

