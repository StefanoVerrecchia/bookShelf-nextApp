'use client'
import React, { useEffect } from 'react'
import Dasboard from '../components/Dasboard.js'

import useBooksApi from '../utils/hooks/useBooksApi';

import { useQuery, useIsFetching } from '@tanstack/react-query'
import SearchBar from '../components/SearchBar.js'
import {useStore} from '../store/store.js'
/* import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
 */


import getResource from '../utils/getResource.js'

const resource = getResource('books');

export default function Books() {
  
  const { getLists } = useBooksApi();
  const { data, isError, isLoading, isSuccess } = useQuery<any>({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await getLists();
      return response.data;
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
  console.log('fileredData --->' , filteredData)
  return (

    <>
      <SearchBar data = {data}/>
      <Dasboard data={filteredData} resource={resource}/>
    </>
  );
}

