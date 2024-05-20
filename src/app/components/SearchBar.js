'use client'
import { useState } from 'react';
import Form from '../components/Form'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import TextField from '@mui/material/TextField';
import { useStore } from '../store/store.js'



const SearchBar = ({ data }) => {

    const filteredData = useStore((state) => state.filteredData);
    const setFilteredData = useStore((state) => state.setFilteredData);



    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.currentTarget.value.trim();
        if (value.length > 0) {
            const searchArray = filteredData.filter(el => {
                return el.title.toLowerCase().includes(value.toLowerCase());
            });
            setFilteredData(searchArray); 
        } else {
            console.log('resetArray --> ', data);
            setFilteredData(data);
        }
    }


    return (
        <div style={{ display: 'flex', margin: '5px' }}>
            <TextField variant="filled" type='search' placeholder='Cerca Libro' onChange={handleSearch} style={{ width: '100%', margin: '5px' }} />
            <Form />
        </div>
    )
}

export default SearchBar
