'use client'
import React, { useEffect } from 'react'
import Dasboard from '../components/Dasboard.js'

import useBooksApi from '../utils/hooks/useBooksApi';

import { useQuery } from '@tanstack/react-query'
import SearchBar from '../components/SearchBar.js'
import {useStore} from '../store/store.js'



import getResource from '../utils/getResource.js'


export default function Books() {
  
  const resource : any = getResource('books');

  
  const { data, isError, isLoading, isSuccess } = useQuery<any>({
    queryKey: ['books'],
    queryFn: async () => {
      if (!resource) {
        throw new Error('Resource not found');
      }
      const response = await resource.action.GET_LIST();
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

